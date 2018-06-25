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

$(document).ready(function() {
    // upload image to post
    // attribute for the image route
    function browseImage(inputPhoto) {
        if (inputPhoto.files && inputPhoto.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#img-upload').attr('src', e.target.result);
            }
            reader.readAsDataURL(inputPhoto.files[0]);
        }
    }
    //show the picture
    $("#browse-img").change(function() {
        browseImage(this);
    });

    // post button
    $("#post").click(getDataPost);
});

// post's variables
var templateCard =  '<div class="card container mb-2 mt-2">' +
                        '<nav class="col-6 nav nav-pills nav-justified">'+
                            '<a class="col-4 nav-item nav-link" href="#">'+
                                '<img class="img-fluid rounded-circle" src="assets/images/profile.png" alt="" id="profile-photo">'+
                            '</a>'+
                            '<a class="nav-item nav-link text-dark" href="#">Name</a>'+
                        '</nav>'+
                        '<img class="card card-img-top" src="__image-post__" alt="Card image cap">' +
                        '<div class="card-body text-right">' +
                            '<a href="#" id="icon-heart">' +
                                '<i class="fas fa-heart"></i>' +
                            '</a>' +
                            '<a href="#" id="icon-comment" data-toggle="modal" data-target="#myModal">' +
                                '<i class="fas fa-comment"></i>' +
                            '</a>' +
                        '</div>' +
                        '<span id="description-photo" class="font-weight-bold">__description__</span>'
                        '<div class="container" id="comments-container">' +
                        '</div>' +
                    '</div>';

function getDataPost(){
    var description = $("#modal-description").val();
    var srcPost = $("#img-upload").attr('src');
    addPost (description,srcPost);

    $("#modal-description").val("");
    $("#img-upload").attr('src',"");
}

function addPost (description,srcPost){
    var finalTemplate = "";
    finalTemplate = templateCard.replace("__image-post__",srcPost)
                                .replace("__description__",description);
    $('#card-post-cont').append(finalTemplate);
    // swal("YEI!", "Contact added!", "success");
}

//------------------------------------------

$(document).ready(function(){
    $("#icon-comment").click(getCommentPost)
});

var templateComment =   '<nav class="col-6 nav nav-pills nav-justified">' +
                            '<a class="col-4 nav-item nav-link" href="#">' +
                                '<img class="img-fluid rounded-circle" src="assets/images/profile.png" alt="" id="profile-comment">' +
                            '</a>' +
                            '<a class="nav-item nav-link text-dark" href="#">Name</a>' +
                        '</nav>'+
                        '<div class="row">'+
                            '<span id="the-comment">__comment__</span>' +
                            '<div class="col-1 p-0 card-body text-right">' +
                                '<a href="#" id="icon-heart">' +
                                    '<i class="fas fa-heart"></i>' +
                                '</a>' +
                                '<a href="#" id="icon-delete" data-toggle="modal" data-tar>' +
                                    '<i class="fas fa-trash-alt"></i>' +
                                '</a>' +
                            '</div>'+
                        '</div>';

function getCommentPost(){
    var comment = $("#modal-comment").val();
    addComment(comment);

    $("#modal-comment").val("");
}

function addComment (comment){
    var lastTemplate = "";
    lastTemplate = templateComment.replace("__comment__", comment);
    $('#comments-container').append(lastTemplate);
}
  





