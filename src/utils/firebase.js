import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHOup9uhjQawJKd96dfcgn2FnQS3nA7Ko",
  authDomain: "musify-3535f.firebaseapp.com",
  databaseURL: "https://musify-3535f.firebaseio.com",
  projectId: "musify-3535f",
  storageBucket: "musify-3535f.appspot.com",
  messagingSenderId: "138916176132",
  appId: "1:138916176132:web:549e6149cd8adf2471f051",
};

export default firebase.initializeApp(firebaseConfig);
