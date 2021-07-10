import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRavOfjYORqby0wiRoyqzn3fIqO2p_qS0",
  authDomain: "awesomeproject-8c57e.firebaseapp.com",
  databaseURL: "https://awesomeproject-8c57e.firebaseio.com",
  projectId: "awesomeproject-8c57e",
  storageBucket: "awesomeproject-8c57e.appspot.com",
  messagingSenderId: "614502580982",
  appId: "1:614502580982:web:692f18d40b0eda0057e2d7",
};

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

const getAllAds = (callback) => {
  db.collection("ads").onSnapshot((snapshot) => {
    let temp = [];
    snapshot.forEach((doc) => {
      const obj = { ...doc.data(), id: doc.id };
      temp.push(obj);
    });
    callback(temp);
  });
};

export { getAllAds };
