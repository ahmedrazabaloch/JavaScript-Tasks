function moveForward(e) {
  var img = document.getElementById("charactor");
  img.value = e.src = "animation-img/chun-li/move-forward.gif";
}

function moving(e) {
  document.getElementById("charactor").value = e.src =
    "animation-img/chun-li/standing.gif";
  e.style.animationName = "roll";
  console.log("working");
}
