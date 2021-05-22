import db from "~/repository/db/firebaseInit";
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";

function all(qSnap) {
	let docs = []
	qSnap.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		docs.push(doc.data())
	});
	return docs
}
export default {
	async getCampaignDonors(campaign) {
		const q = query(collection(db, "users"), where("campaign", "==", campaign));
		const querySnapshot = await getDocs(q);
		return all(querySnapshot);
	},
	async getUserFromEmail(emailId) {
		const q = query(collection(db, "users"), where("email", "==", emailId));
		const querySnapshot = await getDocs(q);
		return all(querySnapshot);
	},
};
