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

// post's varibles
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
                            '<a href="#" id="icon-comment" data-toggle="modal" data-tar>' +
                                '<i class="fas fa-comment"></i>' +
                            '</a>' +
                        '</div>' +
                        '<span id="description-photo" class="font-weight-bold">__description__</span>'
                        '<div class="text-center" id="comments-container">' +
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
    $('main').append(finalTemplate);
    // swal("YEI!", "Contact added!", "success");
}



//Creating a variable to call a button
var btn = document.getElementById("add-button");

//We add an event and call the function ADD
btn.addEventListener('click', add);

//Function that adds the message
function add() {
    //We take the text area content
    var comment = document.getElementById("comment").value;
    btn.removeAttribute("style", "cursor");
    //create a section for the comments
    var postSection = document.getElementById("post-section");
    var containerComments = document.createElement("div");
    containerComments.setAttribute("id", "container-comments");
    postSection.appendChild(containerComments);
    //create a new DIV for the comment
    var newComment = document.createElement("div");
    //add a new class "comment" to my div
    newComment.classList.add("comment");
    //create a new paragraph 
    var paragraph = document.createElement("p");
    //create a text node with the rescued comment
    var textNode = document.createTextNode(comment);
    //append the text Node to the paragraph
    paragraph.appendChild(textNode);



    var user = document.createElement("h5");
    var userName = document.getElementById("user");
    var userNameText = document.createTextNode(userName.textContent);
    user.appendChild(userNameText)


    //create div
    var divImg = document.createElement("div");
    divImg.classList.add("miniPic");

    var divIcons = document.createElement("div")
    divIcons.classList.add("icons");

    //creating input
    var check = document.createElement('input');

    //add checkbox type
    check.type = 'checkbox';

    var heart = document.createElement("i");
    heart.classList.add("fa", "fa-heart", "heart");

    var trash = document.createElement("i");
    trash.classList.add("fa", "fa-trash", "trash");

    var postTime = document.createElement("p");
    var textTime = document.createTextNode(moment().format('LT'));
    postTime.appendChild(textTime);
    postTime.id = "time-size";

    divIcons.appendChild(heart);
    divIcons.appendChild(trash);
    divIcons.appendChild(check);
    divIcons.appendChild(postTime);



    newComment.appendChild(user)
    newComment.appendChild(divImg);
    //uno el párrafo al div de comentario
    newComment.appendChild(paragraph);

    newComment.appendChild(divIcons);


    //agrego el comentario al container
    containerComments.appendChild(newComment);

    //al hacer click en el c
    check.addEventListener('click', function () {
        paragraph.classList.toggle('strike-out');
    })
    //remueve newComent en cont, al darle click en trash
    trash.addEventListener('click', function () {
        if (check.checked) {
            containerComments.removeChild(newComment)
        } else {
            alert("usa el check")
        }
    })

    heart.addEventListener('click', function () {
        heart.classList.toggle('red')
    })
}


//llamo al input
var element = document.getElementById('text');
//le agrego un evento que llame a la función resize
//keyup y keydown para que el cambio de tamaño en el input se analice en los 2 casos
element.addEventListener('keydown', autosize);
element.addEventListener('keyup', autosize);
//Función que cambia el tamaño del input
function autosize(){
  	//le doy alto inline (dentro del html)
  	element.style.cssText = 'height:auto; padding:0';
  	//hago que el alto cambie según el alto del contenido del input (scrollHeight)
    element.style.cssText = 'height:' + element.scrollHeight + 'px';
}

//llamo a mi input
var textCont = document.getElementById('text');
// le agrego un event listener onkeyup que llame a la fcn counter
textCont.addEventListener('onkeyup', counter);

