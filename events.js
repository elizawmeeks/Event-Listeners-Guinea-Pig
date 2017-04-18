// ID Variables
var wrapper = document.getElementById("wrapper");
var output = document.getElementById("output-target");
var header = document.getElementById("page-header");
var input = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig");
var addColor = document.getElementById("add-color");
var makeLarge = document.getElementById("make-large");
var addBorder = document.getElementById("add-border");
var addRounding = document.getElementById("add-rounding");
var article = document.getElementsByClassName("article-section");
var button = document.getElementsByTagName("button");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

wrapper.addEventListener("click", function(event){
	console.log("eventTarget", event.target);
	output.innerHTML = `You clicked on the "${event.target.innerHTML}" section`;
});

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

header.addEventListener("mouseover", function(event){
	console.log("You moused over the header!");
	output.innerHTML = `You moused over the header!`;
});

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

header.addEventListener("mouseout", function(event){
	output.innerHTML = `You left me!!`;
});

// When you type characters into the input field, the output element should mirror the text in the input field.

input.addEventListener("keyup", function(event){
	output.innerHTML = event.target.value;
})

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

addColor.addEventListener("click", function(event){
	guineaPig.classList.toggle("blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

makeLarge.addEventListener("click", function(event){
	guineaPig.classList.toggle("large");
})

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

addBorder.addEventListener("click", function(event){
	guineaPig.classList.toggle("caged");
})

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

addRounding.addEventListener("click", function(event){
	guineaPig.classList.toggle("rounded");
})

// The first section's text should be bold.
function bold(){
	article.item(0).classList.add("bold");
}

bold();

// The last section's text should be bold and italicized.
function boldItalic(){
	article.item(5).classList.add("boldItalic");
}

boldItalic();

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
function block(){
	for (var i = 0; i < button.length; i++){
		button[i].classList.add("block");
	}
}

block();