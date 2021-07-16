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
const auth = firebase.auth();

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

const uploadAd = (data) => {
  db.collection("ads")
    .doc(data.id)
    .set(data)
    .then(() => alert("item added"));
};

const uploadImages = async (imagesArray, id) => {
  const picURL = [];
  console.log("before map ==>", imagesArray);
  for (let i = 0; i < imagesArray.length; i++) {
    const images = imagesArray[i];
    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      const storageRef = storage.ref(`/images/${image.name}`);
      await storageRef.put(image);
      const url = await storageRef.getDownloadURL();
      picURL.push(url);
    }
  }
  await db
    .collection("ads")
    .doc(id)
    .update({ picURL })
    .then(() => console.log("PicturesAdded"));
};

const registerUser = (email, password, username) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      alert("user registered successfully");

      db.collection("users")
        .doc(user.uid)
        .set({ email, password, username })
        .then((res) => {
          console.log("response==>", res);
        })
        .catch((err) => {
          console.log("error==>", err);
        });
    })
    .catch((error) => {
      console.log("error==>", error.message);
      alert(error.message);
    });
};

const loginUser = (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
};

export { getAllAds, uploadAd, uploadImages, registerUser, loginUser };
