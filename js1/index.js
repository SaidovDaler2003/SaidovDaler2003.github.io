// contants
const log = console.log;
const X = 'X';
const O = 'O';
let currentMove = X;
const btns = document.querySelectorAll('.container .item');
const playAgainBtn = document.querySelector('.again');
const label = document.querySelector('#label');

// array represeting cells in a container
// where '' means emply
let cells = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// change textContent of a given node
function addText(node, txt) {
  node.textContent = txt;
}

function playAgain() {
  cells = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  for (let btn of btns) {
    addText(btn, '.'); 
  }
  console.clear();
  currentMove = X;
}

// add events to buttons
function addEvents() {
  for (let btn of btns) {
    btn.addEventListener('click', (e) => {
      const btn = e.target;
      const data = btn.dataset;
      const col = Number(data.col);
      const row = Number(data.row);
      if (cells[row][col] === '') {
        cells[row][col] = currentMove;
        addText(btn, currentMove);
        const won = check();
        if (won) {
          addText(label, `${currentMove} won!!!`)
        } else
          changeMove();
      }
    });
  }
  playAgainBtn.addEventListener('click', () => {
    playAgain();
  });
}

// initialize project
function init() {
  addEvents();
}

function changeMove() {
  if (currentMove === X)
    currentMove = O;
  else {
    currentMove = X;
  }
  addText(label, `Current move: ${currentMove}`);
}

// check fot winnings
function check() {
  // checking rows
  for (let row of cells) {
    if (row[0] + row[1] + row[2] === 'XXX' || row[0] + row[1] + row[2] === 'OOO') {
      return true;
    }
  }
  // checking columns
  if (cells[0][0] + cells[1][0] + cells[2][0] === 'XXX' ||
      cells[0][0] + cells[1][0] + cells[2][0] === 'OOO'
  ) {
      return true;
  }
  if (cells[0][1] + cells[1][1] + cells[2][1] === 'XXX' ||
      cells[0][1] + cells[1][1] + cells[2][1] === 'OOO'
  ) {
      return true;
  }
  if (cells[0][2] + cells[1][2] + cells[2][2] === 'XXX' ||
      cells[0][2] + cells[1][2] + cells[2][2] === 'OOO'
  ) {
      return true;
  }
  // final checking
  if (cells[0][0] + cells[1][1] + cells[2][2] === 'XXX' ||
      cells[0][0] + cells[1][1] + cells[2][2] === 'OOO' ||
      cells[0][2] + cells[1][1] + cells[2][0] === 'XXX' ||
      cells[0][2] + cells[1][1] + cells[2][0] === 'OOO'
  ) {
      return true;
  }
  return false;
}

init();
