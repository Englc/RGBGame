var squares = document.querySelectorAll(".square"); 
var colorDisplay = document.querySelector("#colorDisplay"); 
var messageDesplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var refreshButton = document.querySelector("#refresh");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var numberOfColors = 0;
var colors = [];
var pickedColor = "";

initGame();

for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor){
			messageDesplay.textContent = "Correct";
			refreshButton.textContent = "Play again?";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor; 
		} else {
			this.style.backgroundColor = "#232323"; 
			messageDesplay.textContent = "Try Again?";
		}
	});
}

refreshButton.addEventListener("click", function(){	
	initGame();
});

easyButton.addEventListener("click", function(){
	if (isHardSelected()){
		this.classList.toggle("selected"); 
		hardButton.classList.toggle("selected"); 
		initGame();
		toggleVisibility(); 
	}
});

hardButton.addEventListener("click", function(){
	if (!isHardSelected()){
		this.classList.toggle("selected"); 
		easyButton.classList.toggle("selected"); 
		initGame();
		toggleVisibility(); 
	}
});

function initGame(){
	selectedButton = document.querySelector(".selected");
	isHardSelected() ? colors = generateRandomColors(6) : colors = generateRandomColors(3);

	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor; 

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i]; 
	}

	h1.style.backgroundColor = "steelblue";
	refreshButton.textContent = "New Colors";
	message.textContent = "";
}

function isHardSelected(){
	selectedButton = document.querySelector(".selected");
	return selectedButton.textContent === "hard"
}

function toggleVisibility(){
	squares[3].classList.toggle("hidden");
	squares[4].classList.toggle("hidden");
	squares[5].classList.toggle("hidden");
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
	 	squares[i].style.backgroundColor = color; 
	}
};

function pickColor(){
	var randomIndex = Math.floor(Math.random() * colors.length); 
	return colors[randomIndex]; 
}

function randomColor(){
	return Math.floor(Math.random() * 256); 
}

function generateRandomColors(number){
	var colors = [];
	for(var i = 0; i < number; i++){
		colors.push("rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")");
	}
	return colors; 
}