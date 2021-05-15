import db from "./../repository/db/firebaseInit";

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

  add() {
    var user1 = {
      uid: "JR0Gg8l0uocFhimjkqoIg97T01j2",
      name: "test 1",
      email: "test@gmail.com",
      panNumber: "AWPKUYH897T",
      feedback: "Would like to visit the place, great initiative!!!",
    };
    db.collection("users")
      .add(user1)
      .then((docRef) => {
        console.log("User added: ", docRef.id);
       // this.$router.push("/");
      })
      .catch((error) => {
        console.error("Error adding user: ", error);
      });
  },

  update() {
    let uidToUpdate = "JR0Gg8l0uocFhimjkqoIg97T01j2"; //this.$route.params.uidToUpdate
    var user2 = {
      panNumber: "2AWPKUYH897T",
      feedback: "2Would like to visit the place, great initiative!!!",
    };
    db.collection("users")
      .where("uid", "==", uidToUpdate)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref
            .update({
              panNumber: user2.panNumber,
              feedback: user2.feedback,
            })
            .then(() => {
              console.log("User updated");
              // this.$router.push({
              //   name: "view-user",
              //   params: { uid: uidToUpdate },
              // });
            });
        });
      });
  },
};
