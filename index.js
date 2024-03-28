// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FFFF00";
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Does not pass but is maintained in the window

// function moveDodgerRight() {
//   const gameDiv = document.getElementById("game");
//   const leftNumbers = dodger.style.left.replace("px", "");
//   const left = parseInt(leftNumbers, 10);

//   const maxRight = gameDiv.clientWidth - dodger.offsetWidth;

//   if (left < maxRight) {
//       dodger.style.left = `${left + 1}px`;
//   }
// }


// This passes but it moves beyond the window.
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const gameWidth = window.innerWidth; // Get the game field width

  // Check if dodger won't go off the right edge (considering its width)
  if (left + dodger.offsetWidth <= gameWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

