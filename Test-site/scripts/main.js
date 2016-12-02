// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/dota2_heroes.png') {
      myImage.setAttribute ('src','images/dota2_heroes_2.png');
	} else {
	  myImage.setAttribute ('src','images/dota2_heroes.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Join Dota 2 now, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Join Dota 2 now, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
