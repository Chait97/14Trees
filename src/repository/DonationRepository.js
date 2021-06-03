import db from "~/repository/db/firebaseInit";
import {  doc, setDoc, updateDoc } from "firebase/firestore";
import axios from "axios";

const prefix = process.env.NODE_ENV === "development" ?
	'http://localhost:8888' : ""

function all(qSnap) {
	let docs = []
	qSnap.forEach((doc) => {
		docs.push(doc.data())
	});
	return docs
}

function getRazorpayKey() {
	if (process.env.NODE_ENV === "development") {
		return 'rzp_test_od3yQVWQEML7Ta'
	}

	// for initial testing, this is still test key
	// once ready for prod, make this the live key
	return 'rzp_test_od3yQVWQEML7Ta'
}

function createCallbackUrl(orderId) {
	return '/checkout:' + orderId
}

async function verifyPayment(orderId_orig, response) {
	const rzpEndpoint = prefix + "/.netlify/functions/verify"
	console.log(orderId_orig, response)

	const verifyPayload = {
		paymentId : response.razorpay_payment_id,
		orderId_orig: orderId_orig,
		orderId_checkout: response.razorpay_order_id,
		signature : respvalidonse.razorpay_signature
	}
	console.log(verifyPayload)

	// Uncomment for actual
	let valid = false 

	if (process.env.NODE_ENV === "development") {
		valid = true
	} else {
		// Fire serverless function to verify payment signature
		let response = await axios.post(rzpEndpoint, verifyPayload)
		response = JSON.parse(response)
		if (!response?.data) { throw Error("Something went wrong") }
		valid = response.data.valid
	}

	if (valid) {
		// Update paymentCaptured field for this order in our database
		const donationRef = doc(db, "donations", orderId_orig);
		await updateDoc(donationRef, {
  			paymentCaptured: true
		});
	}
}

async function createOrder() {
	const rzpEndpoint = prefix + "/.netlify/functions/pay"
	console.log(rzpEndpoint)
	if (process.env.NODE_ENV === "development") {
	 	return { orderId: "order_HIXLJxe1NaO1zx",
			verifiedAmount: 50000,
			orderName: "Test Campaign",
			currency: "INR",
			details: {
			name: "Raju Bhai",
			email: "test@example.com"
			}
		}
	}
	else {
		let response = await axios.post(rzpEndpoint, formData)
		response = JSON.parse(response)
		if (!response?.data?.orderId) { 
			throw Error("Something went wrong") 
		}
		// Data must have: orderId, verifiedAmount, orderName, currency, (donor) details 
		return response.data
	}
}

export default {
	async get() {},
	async create(formData) {

		// Create order using serverless function
		const { orderId, verifiedAmount, orderName, currency, details } = createOrder()

		// Mark payment as false and store data in our database even before payment
		formData.paymentCaptured = false
		await setDoc(doc(db, "donations", orderId), formData);

		// create handler to verify payment and update paymentStatus in our database
		const onPaymentSuccess = async (response) => { 
			await verifyPayment(orderId, response)
		}

		const options = {
			key: getRazorpayKey(), // Enter the Key ID generated from the Dashboard
			amount: verifiedAmount,
			currency: currency,
			name: orderName,
			order_id: orderId,
			// callback_url: createCallbackUrl(orderId),
			handler: onPaymentSuccess,
			prefill: { name: details.name, email: details.email, contact: details.phone},
		}

		// Open razorpay global dialog to capture payment
		new Razorpay(options).open()
	},
	async update() {

	},
};