var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

//get length of list
function listLength() {
 console.log(listItems.length);
 return listItems.length
}

function deleteAction(){
	var btn = document.createElement("button");
			btn.appendChild(document.createTextNode("Delete!"));
			listItems[i].appendChild(btn);
			btn.onclick = removeParent;
}
//create delete button for the lists
for (i = 0; i < listLength(); i++ ) {
 deleteAction();
	 }

//remove the item
function removeParent() {
 event.target.parentNode.remove();
}

//check or uncheck list items
function checked() {
 if (event.target.tagName === "LI") {
	 	event.target.classList.toggle("done");
 }
}

// get the length of the user input
function inputLength() {
 return input.value.length;
};

//create a new list item for user input
function createElement() {

 var li = document.createElement("li");
		 li.appendChild(document.createTextNode(input.value));
		 ul.appendChild(li);
		 input.value = "";

		 deleteAction();
};

//when mouse clicked
function addElementByClick() {
 if (inputLength() > 0) {
	 	createElement();
 }
};

//when enter pressed
function addElementByKeypress(event) {
	 if (inputLength() > 0 && event.keyCode === 13) {
	 createElement();
 }
};


ul.addEventListener("click", checked);
button.addEventListener("click", addElementByClick);
input.addEventListener("keypress", addElementByKeypress);
