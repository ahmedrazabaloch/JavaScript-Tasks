function addToDisplay(value) {
  document.getElementById("screen").value += value;
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
