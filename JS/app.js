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
            console.log(result.user);

            window.location.href = "../index.html"
        })
});



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

    $("#add-button").click(getCommentPost);

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
                        '<span id="description-photo" class="font-weight-bold">__description__</span>'+
                        '<div class="container" id="comments-container"></div>' +
                    '</div>';

function getDataPost(){
    var description = $("#modal-description").val();
    var srcPost = $("#img-upload").attr('src');
    addPost(description, srcPost);

    $("#modal-description").val("");
    $("#img-upload").attr('src', "");
}

function addPost(description, srcPost) {
    var finalTemplate = "";
    finalTemplate = templateCard.replace("__image-post__", srcPost)
        .replace("__description__", description);
    $('#card-post-cont').append(finalTemplate);
    // swal("YEI!", "Contact added!", "success");
}





var templateComment =   '<nav class="col-6 nav nav-pills nav-justified">' +
                            '<a class="col-4 nav-item nav-link" href="#">' +
                                '<img class="img-fluid rounded-circle" src="assets/images/profile.png" alt="" id="profile-comment">' +
                            '</a>' +
                            '<a class="nav-item nav-link text-dark" href="#">Name</a>' +
                        '</nav>'+
                        '<div class="row">'+
                            '<span class="col-10" id="the-comment">__comment__</span>' +
                            '<div class="col-1 p-0 card-body text-right">' +
                                '<a href="#" id="icon-heart">' +
                                    '<i class="fas fa-heart"></i>' +
                                '</a>' +
                                '<a href="#" id="icon-delete" data-toggle="modal" data-tar onClick="deleteComment()">' +
                                    '<i class="fas fa-trash-alt"></i>' +
                                '</a>' +
                            '</div>'+
                        '</div>';

function getCommentPost(){
    var comment = $("#comment").val();
    addComment(comment);
    $("#comment").val("");
};

function addComment (comment){
    var lastTemplate = "";
    lastTemplate = templateComment.replace("__comment__", comment);
    $('#comments-container').append(lastTemplate);
    $('#comments-container').attr('id','new_id')
    // $('#comments-container').attr('id','id_new');
    //     for (i=1; i<=100; i++)
    //     div(id="comments-container"+i)

};

// var trash = document.getElementById('icon-delete');

// trash.addEventListener('click',function(){
//     if (trash.clicked){
//         comment-container.removeChild(comment)
//     }
// })

// function deleteComment(){
//     $("#delete-icon").on("click",function(){
//         var commentContainer = $('comment-container')
//         .on("click",function(){$(this).remove()});
//     });
// };

function deleteComment(){
    var item = $(event.currentTarget);
    var cardBody = item.parent();
    var cardRow = cardBody.parent();
    var container = cardRow.parent();


    container.remove();
}