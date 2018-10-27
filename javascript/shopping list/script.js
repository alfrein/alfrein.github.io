var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteBtn = document.getElementsByTagName("button");

//get length of list
function listLength() {
   console.log(li.length);
   return li.length
}

function deleteAction(){
var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    btn.onclick = removeParent;
    li[i].appendChild(btn)
}

//create delete button for the lists
for (i=0; i<listLength();i++){
  deleteAction();
}

//remove the item
function removeParent() {
  event.target.removeEventListener("click", removeParent, false);
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
     i=i+1;
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
