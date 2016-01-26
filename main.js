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
    ) {
    return true;
  } else {
    return false;
  }
}; // predicate function -- returns true or false


//  RENDER OUR VIEW

//whenever called, render will draw the state of the model, only one function to update the view
var render = function() {

};

// });
