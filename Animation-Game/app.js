//                >>>>>>> Left Side Character <<<<<<<<

var rightmove = 0;

function leftAnimation() {
  var charactor = document.getElementById("leftCharactor");
  if (event.keyCode === 68 && rightmove < 1300) { // 68==> D 
    rightmove  = rightmove  + 10;
    charactor.style.left = move + "px";
    charactor.src = "animation-img/Sol-badguy/forwardMove.gif";
  }
  if (event.keyCode === 65 && rightmove  > 10) { // 65 ===> A
    rightmove  = rightmove  - 10;
    charactor.style.left = rightmove + "px";
    charactor.src = "animation-img/Sol-badguy/backwardMove.gif";
  }
  if (event.keyCode === 87) { // 87 ===> W
    charactor.src = "animation-img/Sol-badguy/power-punch.gif";
    charactor.style.height = "450px";
    setTimeout(function () {
      charactor.src = "animation-img/Sol-badguy/action.gif";
      charactor.style.height = "330px";
    }, 4000);
  }
  if (event.keyCode === 83) { // 83 ===> S
    charactor.src = "animation-img/Sol-badguy/flip kick.gif";
    charactor.style.height = "450px";

    setTimeout(function () { 
      charactor.src = "animation-img/Sol-badguy/action.gif";
      charactor.style.height = "330px";
    }, 1300);
  }
  if (event.keyCode === 32) { // 32 ===> SPACE
    charactor.src = "animation-img/Sol-badguy/jump.gif";
    charactor.style.height = "450px";

    setTimeout(function () { 
      charactor.src = "animation-img/Sol-badguy/action.gif";
      charactor.style.height = "330px";
    }, 1200);
  }
  if (event.keyCode === 17) { // 17 ===> CTRL
    charactor.src = "animation-img/Sol-badguy/power-plus.gif";
    charactor.style.height = "400px";

    setTimeout(function () {
      charactor.src = "animation-img/Sol-badguy/action.gif";
      charactor.style.height = "330px";
    }, 3000);
  }
}

window.onkeydown = leftAnimation;

//                >>>>>>> Right Side Character <<<<<<<<

var move = 0;

function rightAnimation() {
  var charactor = document.getElementById("leftCharactor");
  if (event.keyCode === 68 && move < 1300) { // 68==> D 
    move = move + 10;
    charactor.style.left = move + "px";
    charactor.src = "animation-img/Sol-badguy/forwardMove.gif";
  }
  if (event.keyCode === 65 && move > 10) { // 65 ===> A
    move = move - 10;
    charactor.style.left = move + "px";
    charactor.src = "animation-img/Sol-badguy/backwardMove.gif";
  }
  if (event.keyCode === 87) { // 87 ===> W
    charactor.src = "animation-img/Sol-badguy/power-punch.gif";
    charactor.style.height = "450px";
    setTimeout(function () {
      charactor.src = "animation-img/Sol-badguy/action.gif";
      charactor.style.height = "330px";
    }, 4000);
  }
  if (event.keyCode === 83) { // 83 ===> S
    charactor.src = "animation-img/Sol-badguy/flip kick.gif";
    charactor.style.height = "450px";

    setTimeout(function () { 
      charactor.src = "animation-img/Sol-badguy/action.gif";
      charactor.style.height = "330px";
    }, 1300);
  }
  if (event.keyCode === 32) { // 32 ===> SPACE
    charactor.src = "animation-img/Sol-badguy/jump.gif";
    charactor.style.height = "450px";

    setTimeout(function () { 
      charactor.src = "animation-img/Sol-badguy/action.gif";
      charactor.style.height = "330px";
    }, 1200);
  }
  if (event.keyCode === 17) { // 17 ===> CTRL
    charactor.src = "animation-img/Sol-badguy/power-plus.gif";
    charactor.style.height = "400px";

    setTimeout(function () {
      charactor.src = "animation-img/Sol-badguy/action.gif";
      charactor.style.height = "330px";
    }, 3000);
  }
}

window.onkeydown = leftanimation;