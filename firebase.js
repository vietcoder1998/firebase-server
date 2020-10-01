var admin = require('firebase-admin');
var serviceAccount = require('./firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://testapp-eae81.firebaseio.com'
});

const db = admin.firestore();
// console.log(db.getAll())
function getAccessToken() {
    return new Promise(function (resolve, reject) {
        const key = require('./firebase.json');
        const jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            resolve(tokens.access_token);
        });
    });
}

module.exports.getUser = function () {
    admin.auth().getUsers([{ uid: "uid1" }]).then((users) => {
        console.log(users)
    }).catch(err => {
        console.log(err)
    });
}

module.exports.createUser = function () {

}

module.exports.sendMsg = function (payload) {
    // Send a message to the device corresponding to the provided
    // registration token.
    admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
}
