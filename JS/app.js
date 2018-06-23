// Initialize Firebase
var config = {
  apiKey: "AIzaSyDwCaomDJgBm4WeP2l-bG3Pi3w9qmm_Tug",
  authDomain: "social-network-turism.firebaseapp.com",
  databaseURL: "https://social-network-turism.firebaseio.com",
  projectId: "social-network-turism",
  storageBucket: "",
  messagingSenderId: "162849485241"
};
firebase.initializeApp(config);

var dbFB = firebase.database().ref().child('post');
