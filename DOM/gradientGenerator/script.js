var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var hexadecimals = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];

window.onload = setGradient();

function setGradient() {
  setBackground();
  setButton();
  setInput();
  setTextContent();
}

function setBackground() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function setTextContent() {
  css.textContent = body.style.background + ";";
}

function setInput() {
  color1.style.background = color2.value;
  color2.style.background = color1.value;
}

function setButton() {
  button.style.background =
    "linear-gradient(to right, " + color2.value + ", " + color1.value + ")";
}

function randomColors() {
  [color1, color2].forEach(color => {
	//   get random hex value
    var value = "#";
    for (var i = 0; i < 6; i++) {
      value += randomValue();
    }
    color.value = value;
  });

  setGradient();
}

function randomValue() {
  return hexadecimals[Math.floor(Math.random() * (hexadecimals.length - 1))];
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColors);
