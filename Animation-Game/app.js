var currentPosition = 10;
var date = new Date();
var movingStep = Math.floor(date.getSeconds());

function moveForward(e) {
  var img = document.getElementById("charactor");
  img.value = e.src = "animation-img/chun-li/move-forward.gif";
  e.style.left = movingStep + "%";
}
console.log(movingStep);
