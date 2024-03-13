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

function moveDodgerRight() {
    const gameDiv = document.getElementById("game");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    const maxRight = gameDiv.clientWidth - dodger.offsetWidth;
  
    if (left < maxRight) {
      dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
   if (e.key === "ArrowLeft") {
     moveDodgerLeft();
   }
   else if (e.key === "ArrowRight") {
    moveDodgerRight();
   }
 });
