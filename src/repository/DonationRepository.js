import db from "~/repository/db/firebaseInit";
import {  doc, setDoc, updateDoc } from "firebase/firestore";
import axios from "axios";

const prefix = process.env.NODE_ENV === "development" ?
	'http://localhost:8888' : window.location.origin

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

const mockData = {
	orderId: "order_HIXLJxe1NaO1zx",
	verifiedAmount: 50000,
	orderName: "Test Campaign",
	currency: "INR",
	details: {
		name: "Raju Bhai",
		email: "test@example.com"
	}
}

async function verifyPayment(orderId_orig, response) {
	const rzpEndpoint = prefix + "/.netlify/functions/verify"
	console.log(orderId_orig, response)

	const verifyPayload = {
		paymentId : response.razorpay_payment_id,
		orderId_orig: orderId_orig,
		orderId_checkout: response.razorpay_order_id,
		signature : response.razorpay_signature
	}
	console.log(verifyPayload)

	// Uncomment for actual
	// let response = await axios.post(rzpEndpoint, verifyPayload)
	// if (!response?.data?.orderId) { throw Error("Something went wrong") }
	// const { valid, orderId } = response.data
	let valid = true

	if (valid) {
		const donationRef = doc(db, "donations", orderId_orig);
		await updateDoc(donationRef, {
  			paymentCaptured: true
		});
	}
}

export default {
	async get() {

	},
	async create(formData) {
		const rzpEndpoint = prefix + "/.netlify/functions/razorpay_test"
		console.log(rzpEndpoint)

		// Uncomment for actual
		// let response = await axios.post(rzpEndpoint, formData)
		// if (!response?.data?.orderId) { throw Error("Something went wrong") }
		// const { orderId, verifiedAmount, orderName, currency, details } = response.data

		const { orderId, verifiedAmount, orderName, currency, details } = mockData
		formData.paymentCaptured = false
		await setDoc(doc(db, "donations", orderId), formData);

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
			theme: {
				color: "#3399cc"
			}
		}
		new Razorpay(options).open()
	},
	async update() {

	},
};