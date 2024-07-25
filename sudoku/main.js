let sudokuBoard = [];
let selectedCell = null;
let difficulty = 'easy';
let isGeneratingNewGame = false;
let worker;

function initWorker() {
  worker = new Worker(`worker.js?t=${Date.now()}`);
  worker.onmessage = (event) => {
    switch (event.data.type) {
      case 'newGame':
        sudokuBoard = event.data.board;
        renderBoard();
        isGeneratingNewGame = false;
        const newGameButton = document.getElementById('new-game-button');
        newGameButton.disabled = false;
        newGameButton.textContent = '新游戏';
        break;
      case 'solve':
        sudokuBoard = event.data.board;
        renderBoard();
        break;
    }
  };
}

function newGame() {
  if (isGeneratingNewGame) return;
  isGeneratingNewGame = true;

  const newGameButton = document.getElementById('new-game-button');
  newGameButton.disabled = true;
  newGameButton.textContent = '呀...';

  difficulty = document.getElementById('difficulty-select').value;
  worker.postMessage({ type: 'newGame', difficulty });
}

function solveGame() {
  worker.postMessage({ type: 'solve', board: sudokuBoard });
}

function selectCell(row, col) {
  if (selectedCell) {
    selectedCell.classList.remove('selected');
  }
  const cellElement = document.querySelectorAll('#sudoku-board .cell')[
    row * 9 + col
  ];
  cellElement.classList.add('selected');
  selectedCell = cellElement;

  document.addEventListener('keydown', handleKeyboardInput);
}

function handleKeyboardInput(event) {
  if (!selectedCell || !selectedCell.parentElement) {
    return;
  }

  const row = selectedCell.getAttribut('data-row');
  const col = selectedCell.getAttribut('data-col');

  if (event.key >= '1' && event.key <= '9') {
    const num = parseInt(event.key);
    if (isValid(sudokuBoard, row, col, num)) {
      updateCell(row, col, num);
    } else {
      selectedCell.classList.add('invalid');
      setTimeout(() => {
        selectedCell.classList.remove('invalid');
      }, 500);
    }
  } else if (event.key === 'Backspace' || event.key === 'Delete') {
    if (selectedCell.parentElement) {
      updateCell(row, col, 0);
    }
  }

  renderBoard();
}

function renderBoard() {
  const boardElement = document.getElementById('sudoku-board');
  boardElement.innerHTML = '';

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cellElement = createCell(row, col);
      cellElement.classList.add(`row-${row}`, `col-${col}`);
      cellElement.setAttribute('data-row', row);
      cellElement.setAttribute('data-col', col);
      cellElement.addEventListener('click', () => selectCell(row, col));
      boardElement.appendChild(cellElement);
    }
  }
}

function createCell(row, col) {
  const cellElement = document.createElement('div');
  cellElement.classList.add('cell');
  if (sudokuBoard[row][col] !== 0) {
    cellElement.textContent = sudokuBoard[row][col].toString();
  } else {
    cellElement.classList.add('empty');
  }
  return cellElement;
}

function showFireworksAnimation() {
  const fireworksContainer = document.getElementById('fireworks-container');
  fireworksContainer.classList.remove('hidden');

  const canvas = document.getElementById('fireworks-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fireworks = [];
  const particles = [];

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 添加新的烟花
    if (Math.random() < 0.1) {
      fireworks.push(new Firework());
    }

    // 更新和渲染烟花和粒子
    fireworks.forEach((firework, i) => {
      firework.update();
      firework.draw();

      if (firework.done) {
        fireworks.splice(i, 1);
      }
    });

    particles.forEach((particle, i) => {
      particle.update();
      particle.draw();

      if (particle.done) {
        particles.splice(i, 1);
      }
    });
  }

  class Firework {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height;
      this.targetX = Math.random() * canvas.width;
      this.targetY = Math.random() * (canvas.height / 2);
      this.speed = Math.random() * 3 + 2;
      this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
      this.done = false;
    }

    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;

      if (this.y <= this.targetY) {
        this.done = true;
        this.explode();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x + 5 * Math.cos(this.angle),
        this.y + 5 * Math.sin(this.angle)
      );
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }

    explode() {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle(this.x, this.y));
      }
    }
  }

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = Math.random() * 4 - 2;
      this.vy = Math.random() * 4 - 2;
      this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      this.size = Math.random() * 3 + 1;
      this.done = false;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      this.vy += 0.1;

      if (this.y > canvas.height) {
        this.done = true;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  animate();

  fireworksContainer.addEventListener('click', () => {
    fireworksContainer.classList.add('hidden');
    document.getElementById('solve-button').disabled = false;
  });
}

function checkWin() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (
        sudokuBoard[row][col] === 0 ||
        !isValid(sudokuBoard, row, col, sudokuBoard[row][col])
      ) {
        return;
      }
    }
  }
  showFireworksAnimation();
  document.getElementById('solve-button').disabled = true;
}

function updateCell(row, col, value) {
  if (selectedCell) {
    sudokuBoard[row][col] = value;
    if (value === 0) {
      selectedCell.textContent = '';
      selectedCell.classList.add('empty');
    } else {
      selectedCell.textContent = value;
      // selectedCell.classList.remove('empty');
    }
    checkWin();
  }
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

function handleButtonInput({ target }) {
  if (
    selectedCell &&
    selectedCell.classList.contains('empty') &&
    target.nodeName.toLowerCase() === 'span'
  ) {
    let number = target.textContent;
    const row = selectedCell.getAttribute('data-row');
    const col = selectedCell.getAttribute('data-col');
    updateCell(row, col, number);
  }
}

document.getElementById('new-game-button').addEventListener('click', newGame);
document.getElementById('solve-button').addEventListener('click', solveGame);
document.querySelector('.numbers').addEventListener('click', handleButtonInput);

initWorker();
newGame();
