// Initialize Firebase
var config = {
    apiKey: "AIzaSyDwCaomDJgBm4WeP2l-bG3Pi3w9qmm_Tug",
    authDomain: "social-network-turism.firebaseapp.com",
    databaseURL: "https://social-network-turism.firebaseio.com",
    projectId: "social-network-turism",
    storageBucket: "social-network-turism.appspot.com",
    messagingSenderId: "162849485241"
};
firebase.initializeApp(config);

var dbFB = firebase.database().ref().child('post');

// autenticacion
var provider = new firebase.auth.GoogleAuthProvider();
// src dominios autorizados https://stackoverflow.com/questions/48076968/firebase-auth-unauthorized-domain-domain-is-not-authorized
$('#btn-google').click(function() {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
            var infoUser = result.user;
            window.location.href = "../views/home.html"

            var name = infoUser.displayName;
            var email = infoUser.email;
            var photoPerfil = infoUser.photoURL;

            $('#nameUser').append(name);
            $('#profile-photo').attr("src",photoPerfil);

        })
});
