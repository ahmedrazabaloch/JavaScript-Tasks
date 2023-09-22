var timeInSeconds = 60;

function updateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = timeInSeconds;

  if (timeInSeconds === 0) {
    timerElement.textContent = "Time's up!";
    timerElement.style.fontSize = "2em";
    clearInterval(interval);
    swal({
      title: "Time's Up!",
      imageUrl: "animation-img/gameOver.png",
    });
  } else {
    timeInSeconds--;
  }
}

const interval = setInterval(updateTimer, 1000);

//                >>>>>>> Left Side Character <<<<<<<<

var rightMove = 0;

function leftAnimation() {
  var rightCharacter = document.getElementById("leftCharactor");
  if (event.keyCode === 68 && rightMove < 1300) {
    // 68==> D
    rightMove = rightMove + 10;
    rightCharacter.style.left = rightMove + "px";
    rightCharacter.src = "animation-img/Sol-badguy/forwardMove.gif";
    setTimeout(function () {
      rightCharacter.src = "animation-img/Sol-badguy/action.gif";
      rightCharacter.style.height = "350px";
    }, 1000);
  }
  if (event.keyCode === 65 && rightMove > 10) {
    // 65 ===> A
    rightMove = rightMove - 10;
    rightCharacter.style.left = rightMove + "px";
    rightCharacter.src = "animation-img/Sol-badguy/backwardMove.gif";
    setTimeout(function () {
      rightCharacter.src = "animation-img/Sol-badguy/action.gif";
      rightCharacter.style.height = "350px";
    }, 1000);
  }
  if (event.keyCode === 87) {
    // 87 ===> W
    rightCharacter.src = "animation-img/Sol-badguy/power-punch.gif";
    rightCharacter.style.height = "550px";
    setTimeout(function () {
      rightCharacter.src = "animation-img/Sol-badguy/action.gif";
      rightCharacter.style.height = "350px";
    }, 4000);
  }
  if (event.keyCode === 83) {
    // 83 ===> S
    rightCharacter.src = "animation-img/Sol-badguy/flip kick.gif";
    rightCharacter.style.height = "400px";

    setTimeout(function () {
      rightCharacter.src = "animation-img/Sol-badguy/action.gif";
      rightCharacter.style.height = "330px";
    }, 1300);
  }
  if (event.keyCode === 32) {
    // 32 ===> SPACE
    rightCharacter.src = "animation-img/Sol-badguy/power-kick.gif";
    rightCharacter.style.height = "450px";

    setTimeout(function () {
      rightCharacter.src = "animation-img/Sol-badguy/action.gif";
      rightCharacter.style.height = "330px";
    }, 1500);
  }
  if (event.keyCode === 17) {
    // 17 ===> CTRL
    rightCharacter.src = "animation-img/Sol-badguy/flaying-punch.gif";
    rightCharacter.style.height = "650px";

    setTimeout(function () {
      rightCharacter.src = "animation-img/Sol-badguy/action.gif";
      rightCharacter.style.height = "330px";
    }, 1500);
  }
}

//                >>>>>>> Right Side Character <<<<<<<<

var move = 0;

function rightAnimation() {
  var charactor = document.getElementById("rightCharactor");
  if (event.keyCode === 102 && move > 10) {
    // 102 ===> Num Pad NO 6
    move = move - 10;
    charactor.style.right = move + "px";
    charactor.src = "animation-img/Terry-Bogard/walkback.gif";

    setTimeout(function () {
      charactor.src = "animation-img/Terry-Bogard/standingPositions.gif";
      charactor.style.height = "330px";
    }, 1000);
  }
  if (event.keyCode === 100 && move < 1400) {
    // 100 ===> Num Pad NO 4
    move = move + 10;
    charactor.style.right = move + "px";
    charactor.src = "animation-img/Terry-Bogard/walkforward.gif";

    setTimeout(function () {
      charactor.src = "animation-img/Terry-Bogard/standingPositions.gif";
      charactor.style.height = "330px";
    }, 1000);
  }
  if (event.keyCode === 104) {
    // 104 ===> Num Pad NO 8
    charactor.src = "animation-img/Terry-Bogard/punchBigFire.gif";
    charactor.style.height = "1000px";
    charactor.style.bottom = "0px";

    setTimeout(function () {
      charactor.src = "animation-img/Terry-Bogard/standingPositions.gif";
      charactor.style.height = "330px";
      charactor.style.bottom = "30px";
    }, 4000);
  }
  if (event.keyCode === 98) {
    // 98 ===> Num Pad NO 2
    charactor.src = "animation-img/Terry-Bogard/punchFire.gif";
    charactor.style.height = "450px";

    setTimeout(function () {
      charactor.src = "animation-img/Terry-Bogard/standingPositions.gif";
      charactor.style.height = "330px";
    }, 1300);
  }
  if (event.keyCode === 96) {
    // 96 ===> Num Pad NO 0
    charactor.src = "animation-img/Terry-Bogard/punchFire.gif";
    charactor.style.height = "450px";

    setTimeout(function () {
      charactor.src = "animation-img/Terry-Bogard/standingPositions.gif";
      charactor.style.height = "330px";
    }, 3700);
  }
  if (event.keyCode === 101) {
    // 101 ===> Num Pad NO 5
    charactor.src = "animation-img/Terry-Bogard/powerPlus.gif";
    charactor.style.height = "800px";
    charactor.style.bottom = "0px";

    setTimeout(function () {
      charactor.src = "animation-img/Terry-Bogard/standingPositions.gif";
      charactor.style.height = "330px";
      charactor.style.bottom = "30px";
    }, 3000);
  }
}

window.addEventListener("keydown", leftAnimation);
window.addEventListener("keydown", rightAnimation);
