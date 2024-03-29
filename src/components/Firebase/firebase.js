import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

      // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  driver = driver => this.db.ref(`drivers/${driver}`);
  users = () => this.db.ref('users');
  drivers = () => this.db.ref('drivers');
  currentuser = () => this.auth.onAuthStateChanged();

  writeUserData = (userId, name, platenumber, to_location, from_location) => 
    this.db.ref('drivers').push().set({
      device_id: userId,
      driver_name: name,
      plate_number : platenumber,
      to_location: to_location,
      from_location: from_location
    });

    updateUserData = (uid, deviceid, name, platenumber, to_location, from_location) => 
    this.db.ref('drivers/' + uid).set({
      device_id: deviceid,
      driver_name: name,
      plate_number : platenumber,
      to_location: to_location,
      from_location: from_location
    });
  
}
export default Firebase;
