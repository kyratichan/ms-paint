import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDhMETYzofQ7lzAt4eNZbEjDzNbwsAThLM",
    authDomain: "ms-paint-ac45b.firebaseapp.com",
    databaseURL: "https://ms-paint-ac45b-default-rtdb.firebaseio.com",
    projectId: "ms-paint-ac45b",
    storageBucket: "ms-paint-ac45b.appspot.com",
    messagingSenderId: "162109324286",
    appId: "1:162109324286:web:b012050c03b389f4f59eaf",
    measurementId: "G-8P32QE4W01"
};

firebase.initializeApp(config);
export default firebase;