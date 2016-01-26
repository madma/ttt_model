console.log("main.js loaded!");

// document.eventListener("load", function(){

// MODEL

var won = false;
var currentPlayer = "X";
var board = [
  "", "", "",   // 0, 1, 2
  "", "", "",   // 3, 4, 5
  "", "", "",   // 6, 7, 8
];

// 1. START THE GAME
/*    inputs:
        -currentPlayer, board, won

      outputs:
        -board is emptied, player is X, won is false
*/

var startGame = function() {
  won = false;
  currentPlayer = "X";
  board = [
    "", "", "",   // 0, 1, 2
    "", "", "",   // 3, 4, 5
    "", "", "",   // 6, 7, 8
  ];
};

// 2. MOVE (CHANGES TURN)
/*    inputs:
        -whose turn it is,
        -what cell

      outputs:
        -fill in cell with the right player
        -calculate if there is a winner
        -turn changes
*/
var move = function (cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    // currentPlayer = (currentPlayer === "X" ? "O" : "X");
  }
};

// 3. WIN THE GAME
/*    inputs:
        -board

      outputs:
        - true or false
*/
var gameWon = function() {
  if (
    // alternatively, currentPlayer = 1/0/-1 with condition Math.abs(board[0] + board[1] + board [2] === 3)
    ((board[0] === board[1]) && (board[0] === board[2]) && board[0] != "") ||
    ((board[3] === board[4]) && (board[3] === board[5]) && board[3] != "") ||
    ((board[6] === board[7]) && (board[6] === board[8]) && board[6] != "")
    // TODO: Add rest of winning conditions
    ) {
    return true;
  } else {
    return false;
  }
}; // predicate function -- returns true or false


//  RENDER OUR VIEW

//whenever called, render will draw the state of the model, only one function to update the view
var render = function() {
  // Render turn counter component
  var turnEl = document.getElementById("turn");
  turnEl.textContent = "Turn: " + currentPlayer;
  // Render winner component
  var winnerEl = document.getElementById("winner");
  if (!won) {
    winnerEl.textContent = "Winner: ?";
  } else {
    winnerEl.textContent = "Winner: " + currentPlayer;
  }
  // Render board component
  document.getElementById("cell0").textContent = board[0];
  document.getElementById("cell1").textContent = board[1];
  document.getElementById("cell2").textContent = board[2];
  document.getElementById("cell3").textContent = board[3];
  document.getElementById("cell4").textContent = board[4];
  document.getElementById("cell5").textContent = board[5];
  document.getElementById("cell6").textContent = board[6];
  document.getElementById("cell7").textContent = board[7];
  document.getElementById("cell8").textContent = board[8];

};

// USER INTERACTION

document.getElementById("restart").addEventListener("click", function(evt) {
  startGame(); // MODEL
  render();    // VIEW
});

document.getElementById("board").addEventListener("click", function(evt) {
  move(evt.target.id.slice(-1));
  render();
});

// });





























