import db from "~/repository/db/firebaseInit";

export default {
  get() {
    let users = [];
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          users.push({
            name: doc.data().name,
            test: doc.data().test,
          });
          console.log(doc.id, " => ", doc.data());
        });
        return users;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
  // MANY OTHER ENDPOINT RELATED STUFFS
};
