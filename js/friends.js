
//Add the names of everyone at your table   
var friends = ['Dulce', 'Ada'];

function createList() {
	var list = "<ul id='list'>"
	// Create your for loop here
	// HINT: the string should look like '<li>' + friends[x] + "</li>" + ....
	for(i=0; i < friends.length; i++) {
		var x = '<li>' + friends[i] + '</li>';
		list = list + x;
		console.log(list);
	}
	list = list + '</ul>'
	console.log(list);
	// Use jQuery to select the body tag on the index and append the finish table string
	$("body").append(list);
}
function addFriend() {
	friends.push(newFriend);
}
$("#submit").on('click', function() {
	newFriend = $("#newfriend").val();
	addFriend(newFriend);
	$("#list").append("<li>" + newFriend + "</li>");
})
createList();