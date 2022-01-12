/*  IDEA #1

We have a board with n x n tiles size

  [
    0 1 2
    3 4 5
    6 7 8
  ]

we want to keep track of the first solved path

  [ 0, 1 ,2 ,5 ,8 ]

and use it as a recursive

we want to set a property for each tile that keeps track
of how many open paths are around it

there also needs to be an extra property (function?) called roadblock
roadblock checks if there are available paths on a tile next to the
current position

(((that passes its value))) to
the tile that has just been traversed


we've already been through it once


------------
           8
           true
           4
           7                               ? 3
                                             6
           if  ([2][2]) !([2][2].flag)       7
           8                                 8


    let target = [2][2]

[
  0
]

[
  0 1
  2 3
]


*/

/* IDEA # 2 (builds on #1)

class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        // sets the borders as non-traversable
        if (row === 0 || col === 0) {
          this.board[row].push(false);
        } else {
          this.board[row].push(true);
        }
      }
    }
  }

  class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    const newSize = size + 1;
    this.board = new Board(newSize);
    this.row = 0;
    this.col = 0;
    // this.goal = [this.row[size -1][this.column[size -1]]
    // this.isExhausted =;
  }

  Now the board should look like this:

    0 0 0 0 0
    0 1 1 1 0
    0 1 1 1 0
    0 1 1 1 0
    0 0 0 0 0

  we want to traverse if the value is 1
  we want to mark when a path is exhausted with a 0
  we want to stop when we reach coordinates [size - 2][size - 2]
    && increment the found paths count


*/

class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // adds a size and a result property
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
    this.size = size;
    this.result = 0;
  }

  // check if the move is within the board's boundaries
  isValid(row, col) {
    if (row < 0 || row > this.size - 1 || col < 0 || col > this.size - 1) {
      return false;
    }
    return true;
  }

  recursiveWalking(board, row, col) {
    const goalX = this.size - 1;
    const goalY = this.size - 1;

    // sets current position as visited
    board.togglePiece(row, col);

    // check if goal is reached
    if (row === goalX && col === goalY) {
      this.result++;
      return;
    }

    // check if move right leads to a path
    if (
      this.isValid(row, col + 1) &&
      board.hasBeenVisited(row, col + 1) === false
    ) {
      this.recursiveWalking(board, row, col + 1);
      board.togglePiece(row, col + 1);
    }

    // check if move down leads to a path
    if (
      this.isValid(row - 1, col) &&
      board.hasBeenVisited(row - 1, col) === false
    ) {
      this.recursiveWalking(board, row - 1, col);
      board.togglePiece(row - 1, col);
    }

    // check if move left leads to a path
    if (
      this.isValid(row, col - 1) &&
      board.hasBeenVisited(row, col - 1) === false
    ) {
      this.recursiveWalking(board, row, col - 1);
      board.togglePiece(row, col - 1);
    }

    // check if move up leads to a path
    if (
      this.isValid(row + 1, col) &&
      board.hasBeenVisited(row + 1, col) === false
    ) {
      this.recursiveWalking(board, row + 1, col);
      board.togglePiece(row + 1, col);
    }
  }

  solve() {
    this.recursiveWalking(this.board, this.row, this.col);
    return this.result;
  }
}

module.exports = { RobotPaths };

/* Addendum

    I took "inspiration" from a lot of code snippets about maze solving algorithms
    after not being able to find a proper way to translate my pseudo code to
    actual working code.

    There were a lot of failed attempts of Idea #2 (line 55) that I couldn't get to work.

*/
