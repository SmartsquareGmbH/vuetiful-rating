import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;
