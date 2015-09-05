
document.querySelector('img').onclick = function () {
    alert( 'This is just a picture. Sorry. You\'ll have to pour your own!' );
}

var changeUserButton  = document.querySelector('button');
var mainHeading = document.querySelector('h1');

function setUserName () {
    var myName = prompt( 'Please enter your name or nickname (only used locally).');
    localStorage.setItem( 'userName', myName );
    mainHeading.innerHTML = 'Are you thirsty, ' + myName + "?";
}

if (! localStorage.getItem('userName')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('userName');
	 mainHeading.innerHTML = 'Are you thirsty, ' + storedName + "?";
}

changeUserButton.onclick = function () {
    setUserName();
}
