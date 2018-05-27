import firebase from 'firebase';
import { database, auth, storage } from '../config/firebase';

export function register(data, callback) {
  const { email, passWord, teamName} = data;
    auth.createUserWithEmailAndPassword(emailAddress, passWord)
    .then((resp) => {
      createUser({ teamName, uid:resp.user.uid }, callback));
      console.log('resp':resp);
    }
    .catch((error) => callback(false, null, error));
}

export function createUser(user, callback) {
  const userRef = database.ref().child('users');
  userRef.child(user.uid).update({...user})
    .then(() => callback(true, user, null))
    .catch((error => callback(false, null, {meassage: error}));
}

export function login(data, callback) {
  const { email, passWord } = data;
  auth.signInWithEmailAndPassword(email, password)
        .then((resp) => getUser(resp.user, callback))
        .catch((error) => callback(false, null, error));
}

export function getUser(user, callback) {
    database.ref('users').child(user.uid).once('value')
        .then(function(snapshot) {

            const exists = (snapshot.val() !== null);

            //if the user exist in the DB, replace the user variable with the returned snapshot
            if (exists) user = snapshot.val();

            const data = { exists, user }
            callback(true, data, null);
        })
        .catch(error => callback(false, null, error));
}

//Send Password Reset Email
export function resetPassword(data, callback) {
    const { email } = data;
    auth.sendPasswordResetEmail(email)
        .then((user) => callback(true, null, null))
        .catch((error) => callback(false, null, error));
}

export function signOut (callback) {
    auth.signOut()
        .then(() => {
            if (callback) callback(true, null, null)
        })
        .catch((error) => {
            if (callback) callback(false, null, error)
        });
}
