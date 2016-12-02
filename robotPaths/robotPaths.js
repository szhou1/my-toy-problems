/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };

  board.isValidPiece = function(i, j) {
    return n>i && n>j && 0<=i && 0<=j;
  };

  return board;
};

var robotPaths = function(n, b, i, j) {
  var pathsCount = 0;
  var b = b || makeBoard(n);
  var i = i || 0;
  var j = j || 0;

  var move = function(board, i, j) {

    // console.log('at', i, j);

    if(i === n-1 && j === n-1) {
      // console.log('add path');
      pathsCount++;
      return;
    }
    board.togglePiece(i, j);

    if (j > 0 && board.isValidPiece(i, j-1) && !board.hasBeenVisited(i, j-1) ) { // left
      move(board, i, j-1)
    } 
    if (j < n-1 && board.isValidPiece(i, j+1) && !board.hasBeenVisited(i, j+1) ) { // right
      move(board, i, j+1);
    } 
    if (i > 0 && board.isValidPiece(i-1, j) && !board.hasBeenVisited(i-1, j) ) { // up
      move(board, i-1, j);
    }
    if (i < n-1 && board.isValidPiece(i+1, j) && !board.hasBeenVisited(i+1, j) ) { // down
      move(board, i+1, j);
    }

    board.togglePiece(i, j);
  }

  move(b, i, j);
  return pathsCount;
};

// var paths = robotPaths(6, makeBoard(6), 0, 0);
var paths = robotPaths(6);

console.log('Count: ', paths);