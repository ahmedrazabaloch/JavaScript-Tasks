var move = 0;

function animation() {
  var charactor = document.getElementById("charactor");
  if (event.keyCode === 68 && move < 1230) {
    move = move + 10;
    charactor.style.left = move + "px";
    charactor.src = "animation-img/chun-li/move-forward.gif";
  }
  if (event.keyCode === 65 && move > 10) {
    move = move - 10;
    charactor.style.left = move + "px";
    charactor.src = "animation-img/chun-li/move-backward.gif";
  }
  if (event.keyCode === 87) {
    charactor.src = "animation-img/chun-li/flaying-kick.gif";
    charactor.style.height = "450px";
    setTimeout(function () {
      charactor.src = "animation-img/chun-li/standing.gif";
      charactor.style.height = "330px";
    }, 2500);
  }
  if (event.keyCode === 83) {
    charactor.src = "animation-img/chun-li/forward-flip-kick.gif";
    charactor.style.height = "450px";

    setTimeout(function () {
      charactor.src = "animation-img/chun-li/standing.gif";
      charactor.style.height = "330px";
    }, 2100);
  }
  if (event.keyCode === 32) {
    charactor.src = "animation-img/chun-li/forward-punch.gif";
    charactor.style.height = "450px";

    setTimeout(function () {
      charactor.src = "animation-img/chun-li/standing.gif";
      charactor.style.height = "330px";
    }, 1200);
  }
  if (event.keyCode === 17) {
    charactor.src = "animation-img/chun-li/sitting-slap.gif";
    charactor.style.height = "450px";

    setTimeout(function () {
      charactor.src = "animation-img/chun-li/standing.gif";
      charactor.style.height = "330px";
    }, 1000);
  }
}

window.onkeydown = animation;
