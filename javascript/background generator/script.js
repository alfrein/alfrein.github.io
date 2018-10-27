var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

setGradient();

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function random() {
	var letters = '0123456789ABCDEF';
  	var color11 = '#';
		var color12 = '#';
  	for (var i = 0; i < 6; i++) {
    	color11 += letters[Math.floor(Math.random() * 16)];
			color12 += letters[Math.floor(Math.random() * 16)];
  	}

  	color1.value = color11;
		color2.value = color12;

		setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", random)
