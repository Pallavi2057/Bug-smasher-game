//Student name : Pallavi Mishra
//Student number : 301294886
var interval = 2000;
var score = 0;
var timer;
var bugImg;

window.onload = function start() {
	bugImg = document.getElementById("ant");
	bugImg .addEventListener("click", checkTap, false);
	bugImg .addEventListener("ontouchstart", checkTap, false);
  	update();
}

function update() {
  document.getElementById('scoreLabel').innerHTML = score;
  timer = window.setInterval(moveAnt, interval );
}

function moveAnt(){
	bugImg.style.left = (Math.random() * 800) + "px";
	bugImg.style.top = (Math.random() * 400)  + "px";
    bugImg.addEventListener("click", checkTap, false);
	bugImg.addEventListener("ontouchstart", checkTap, false);
}

function checkTap() {
	bugImg.removeEventListener("click", checkTap, false);
	score = score + 10;
	document.getElementById('scoreLabel').innerHTML = score;
	interval = interval - 200;
	clearInterval(timer);
	timer = window.setInterval(moveAnt, interval);
}


function resetSpeed() {
  interval = 2000
  clearInterval(timer);
  timer = window.setInterval(moveAnt, interval);
  alert("The speed is reset");
}
  
function resetScore() {
  score = 0;
  document.getElementById('scoreLabel').innerHTML = score;
}

