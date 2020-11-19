import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };

const config = {
  apiKey: 'AIzaSyAsbE99suyNgPSOdvQmfoOaNoUb_FoTlkM',
  authDomain: 'curriculum-aide.firebaseapp.com',
  databaseURL: 'https://curriculum-aide.firebaseio.com',
  projectId: 'curriculum-aide',
  storageBucket: 'curriculum-aide.appspot.com',
  messagingSenderId: '51333740661'
};


firebase.initializeApp(config);

// firebase.database().ref('notes').push({
// 	title: 'stuff',
// 	body: 'do stuff'
// });

// firebase.database().ref().once('value').then((snapshot) => {
// 	const lessons = [];

// 	snapshot.forEach((childSnapshot) => {
// 		lessons.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// });

// firebase.database().ref().on('value', (snapshot) => {
// 	const lessons = [];

// 	snapshot.forEach((childSnapshot) => {
// 		lessons.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
	
// 	console.log(snapshot.val());
// });

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };