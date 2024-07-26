function generateSudokuBoard(difficulty) {
  const board = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => 0)
  );
  board[0][0] = Math.floor(Math.random() * 9) + 1; // 随机填充第一个单元格
  fillBoard(board);

  let numToRemove;
  switch (difficulty) {
    case 'easy':
      numToRemove = Math.floor(Math.random() * 30) + 10;
      break;
    case 'medium':
      numToRemove = Math.floor(Math.random() * 40) + 20;
      break;
    case 'hard':
      numToRemove = Math.floor(Math.random() * 50) + 30;
      break;
  }

  let solutions = 0;
  let tempBoard = board.slice();
  solveSudoku(tempBoard);
  solutions++;

  while (solutions !== 1) {
    board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
    fillBoard(board);
    tempBoard = board.slice();
    solutions = 0;
    solveSudoku(tempBoard);
    solutions++;
  }

  for (let i = 0; i < numToRemove; i++) {
    let row, col;
    do {
      row = Math.floor(Math.random() * 9);
      col = Math.floor(Math.random() * 9);
    } while (board[row][col] === 0);
    board[row][col] = 0;
  }

  return board;
}

function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (row === 0 && col === 0) continue;
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
              return true;
            }
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, num) {
  // 检查行
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num && i !== col) {
      return false;
    }
  }

  // 检查列
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num && i !== row) {
      return false;
    }
  }

  // 检查 3x3 子网格
  const subGridRow = Math.floor(row / 3);
  const subGridCol = Math.floor(col / 3);
  for (let i = subGridRow * 3; i < subGridRow * 3 + 3; i++) {
    for (let j = subGridCol * 3; j < subGridCol * 3 + 3; j++) {
      if (board[i][j] === num && (i !== row || j !== col)) {
        return false;
      }
    }
  }

  return true;
}

function fillBoard(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (fillBoard(board)) {
              return true;
            }
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

onmessage = (event) => {
  switch (event.data.type) {
    case 'newGame':
      const newBoard = generateSudokuBoard(event.data.difficulty);
      postMessage({ type: 'newGame', board: newBoard });
      break;
    case 'solve':
      const solutionBoard = event.data.board.slice();
      solveSudoku(solutionBoard);
      postMessage({ type: 'solve', board: solutionBoard });
      break;
  }
};
