let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let line = document.querySelector(".game");

let turnO = true; //playerX , playerO

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  location.reload(true);
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.background = "#200f57";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.background = "#200f57";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

function disableBoxes() {
  for (let box of boxes) {
    box.disabled = true;
  }
}

function drawLine(a, b, c) {
  if (
    winPatterns[0][0] == a &&
    winPatterns[0][1] == b &&
    winPatterns[0][2] == c
  ) {
    line.style.setProperty("--width", "80%");
    line.style.setProperty("--rotate", "0deg");
    line.style.setProperty("--transform", "0px, -21vmin");
  } else if (
    winPatterns[1][0] == a &&
    winPatterns[1][1] == b &&
    winPatterns[1][2] == c
  ) {
    line.style.setProperty("--width", "80%");
    line.style.setProperty("--rotate", "0deg");
  } else if (
    winPatterns[2][0] == a &&
    winPatterns[2][1] == b &&
    winPatterns[2][2] == c
  ) {
    line.style.setProperty("--width", "80%");
    line.style.setProperty("--rotate", "0deg");
    line.style.setProperty("--transform", "0px, 20vmin");
  } else if (
    winPatterns[3][0] == a &&
    winPatterns[3][1] == b &&
    winPatterns[3][2] == c
  ) {
    line.style.setProperty("--width", "80%");
    line.style.setProperty("--rotate", "90deg");
    line.style.setProperty("--transform", "0px, 20vmin");
  } else if (
    winPatterns[4][0] == a &&
    winPatterns[4][1] == b &&
    winPatterns[4][2] == c
  ) {
    line.style.setProperty("--width", "80%");
    line.style.setProperty("--rotate", "90deg");
  } else if (
    winPatterns[5][0] == a &&
    winPatterns[5][1] == b &&
    winPatterns[5][2] == c
  ) {
    line.style.setProperty("--width", "80%");
    line.style.setProperty("--rotate", "90deg");
    line.style.setProperty("--transform", "0px, -20vmin");
  } else if (
    winPatterns[6][0] == a &&
    winPatterns[6][1] == b &&
    winPatterns[6][2] == c
  ) {
    line.style.setProperty("--width", "115%");
    line.style.setProperty("--rotate", "47deg");
  } else if (
    winPatterns[7][0] == a &&
    winPatterns[7][1] == b &&
    winPatterns[7][2] == c
  ) {
    line.style.setProperty("--width", "115%");
    line.style.setProperty("--rotate", "-47deg");
  } else {
    line.style.setProperty("--width", "0%");
    line.style.setProperty("--rotate", "0deg");
  }
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        disableBoxes();
        console.log(pattern[0], pattern[1], pattern[2]);

        drawLine(pattern[0], pattern[1], pattern[2]);
        resetBtn.innerHTML = "New Game";

        showWinner(pos1Val);
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
