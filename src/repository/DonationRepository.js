import db from "~/repository/db/firebaseInit";
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";

function all(qSnap) {
	let docs = []
	qSnap.forEach((doc) => {
		docs.push(doc.data())
	});
	return docs
}

export default {
	async get() {

	},
	async add(orderId, formData) {
		await setDoc(doc(db, "donations", orderId), docData);
	},
	async update() {

	},
};