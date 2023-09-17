var screen = document.getElementById("screen");
function addToDisplay(value) {
  var input = screen.value;
  var oprater = ["+", "-", "%", "/", "*"];
  var last = input[input.length - 1];
  var newInput = value;

  if (oprater.indexOf(last) !== -1 && oprater.indexOf(newInput) !== -1) {
    input = input.slice(0, -1) + newInput;
  } else {
    input += newInput;
  }

  screen.value = input;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}
function singleDelete() {
  var inputElement = document.getElementById("screen");
  var inputValue = inputElement.value;
  if (inputValue.length > 0) {
    var updatedValue = inputValue.slice(0, -1);
    inputElement.value = updatedValue;
  }
}

function calculate() {
  var result = eval(document.getElementById("screen").value);
  document.getElementById("screen").value = result;
}
