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

// upload image posting
$(document).ready(function() {
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }
		        reader.readAsDataURL(input.files[0]);
		    }
		}
		$("#browse-img").change(function(){
		    readURL(this);
		});
	});
