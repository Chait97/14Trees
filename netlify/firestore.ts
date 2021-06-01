const admin = require('firebase-admin');
const serviceAccount = require('serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

exports.handler = (event, context, callback) => {
  // Write a simple document with two fields
  const data = {
    message: "Hello, world!",
    timestamp: new Date()
  };

  db.collection('lambda-docs').add(data).then((ref) => {
    // On a successful write, return an object
    // containing the new doc id.
    callback(null, {
      id: ref.id
    });
  }).catch((err) => {
    // Forward errors if the write fails
    callback(err);
  });
}