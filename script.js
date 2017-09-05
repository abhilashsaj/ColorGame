var numSquares = 6;
var colors = [];
var pickedcolor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setUpModeButtons();	
	setUpSquares();  
  	reset();
}

function setUpModeButtons(){
	for( var i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){	
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			//get color of clicked square
			if(clickedColor === pickedcolor) {
				messageDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h.style.backgroundColor= pickedcolor;
				resetButton.textContent = "Play Again?"

			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}


function reset() {
	colors = generateRandomColors(numSquares);
	pickedcolor = pickColor(); 
	colorDisplay.textContent = pickedcolor;
	messageDisplay.textContent = " ";
	resetButton.textContent = "New colors"

	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";

	}
	h.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function() {
	reset();
});


function changeColor(color) {
	for(var i=0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i< num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}