var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLi = [...document.querySelectorAll("li")];
var buttons = document.querySelectorAll(".btn-danger");

window.onload = updateButtonList();
window.onload = updateLis();

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.classList.add("btn-danger");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";
  updateLis();
  updateButtonList();
}

function updateLis() {
  var allLi = [...document.querySelectorAll("li")];
  allLi.map(li => li.addEventListener("click", toggleLineThorugh));
}

function updateButtonList() {
  var buttons = document.querySelectorAll(".btn-danger");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function() {
      this.parentElement.remove();
    });
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleLineThorugh() {
  this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
