const boxes = document.querySelectorAll('.box');
const text = document.querySelector('#heading');
const strategy = document.querySelector('#strategy');
const restartButton = document.querySelector('#restart');

const MAX_PIECES_PER_PLAYER = 3;

const drawBoard = () => {
  boxes.forEach((box, i) => {
    let styleString = '';
    if (i < 3) {
      styleString += 'border-bottom: 3px solid var(--text);';
    }
    if (i % 3 === 0) {
      styleString += 'border-right: 3px solid var(--text);';
    }
    if (i % 3 === 2) {
      styleString += 'border-left: 3px solid var(--text);';
    }
    if (i > 5) {
      styleString += 'border-top: 3px solid var(--text);';
    }
    box.style = styleString;
    box.addEventListener('click', boxClicked);
  });
};

const spaces = [];
const tick_x = 'X';
const tick_circle = 'O';

let currentPlayer = tick_x;

let remainingPieces = {
  [tick_x]: MAX_PIECES_PER_PLAYER,
  [tick_circle]: MAX_PIECES_PER_PLAYER,
};

let selectedPiece = null;

const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id] && remainingPieces[currentPlayer] > 0) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    remainingPieces[currentPlayer]--;

    if (playerWon()) {
      text.innerText = `${currentPlayer} has won!`;
      // Delay the restart to give time to display the win message
      setTimeout(restart, 2000);
      return;
    }

    currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
  } else if (spaces[id] && selectedPiece === null) {
    selectedPiece = spaces[id];
    spaces[id] = null;
    e.target.innerText = '';
  } else if (!spaces[id] && selectedPiece !== null) {
    spaces[id] = selectedPiece;
    e.target.innerText = selectedPiece;
    selectedPiece = null;
  }
};




/*const playerWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins up to top`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins on the left`;
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins on the right`;
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins on the bottom`;
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins vertically on middle`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins horizontally on the middle`;
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
};*/
const playerWon = () => {
  const checkWin = (a, b, c) => {
    return spaces[a] === currentPlayer && spaces[b] === currentPlayer && spaces[c] === currentPlayer;
  };

  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (checkWin(a, b, c)) {
      strategy.innerText = `${currentPlayer} wins!`;
      return true;
    }
  }

  return false;
};



const restart = () => {
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    boxes.forEach((box) => {
      box.innerText = '';
    });
    text.innerText = `Play`;
    strategy.innerText = ``;
  }, 1000);
};


restartButton.addEventListener('click', restart);
restart();
drawBoard();

