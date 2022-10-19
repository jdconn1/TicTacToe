let boxes = Array.from(document.getElementsByClassName('box'));
let playerText = document.querySelector('#playerText');
let restart = document.querySelector('#restart');
let alert1 = document.querySelector('#win-alert');
document.getElementById('win-alert').style.visibility = "hidden";

function boxClick() {
    boxes.forEach((box) => box.addEventListener('click', boxClicked))
};

function showAlert() {
    $('#win-alert').show();
}
 function hideAlert() {
    $('#win-alert').hide(); 
}

const O = "O";
const X = "X";

let currentPlayer = 'X';
const board = new Array(9).fill(null);

const boxClicked = (element) => {
    const id = element.target.id;

    if (!board[id]) {
        board[id] = currentPlayer;
        element.target.innerText = currentPlayer;
        document.getElementById('win-alert').style.visibility = "visible";
        
    if (playerHasWon() === false) {
        hideAlert();
        }

        if (playerHasWon() !== false) {
            playerText.innerHTML = `Player ${currentPlayer} has won!`;
            alert1.innerHTML = `Player ${currentPlayer} has won!`;
            showAlert();
            boxes.forEach((box) => box.removeEventListener('click', boxClicked));
            return;
        }
        if (!board.some((element) => element === null)) {
           playerText.innerHTML = `Draw!`;
           alert1.innerHTML = 'DRAW!';
           showAlert();
           return;
        };
        
        if (currentPlayer === O) {
            currentPlayer = X;
        } else {
            currentPlayer = O;
        }
       
    } 
    playerText.innerHTML = `Player ${currentPlayer}'s Turn`;
    console.log(board);
};

boxClick()

const winnerCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function playerHasWon() {
    for (const condition of winnerCombos) {
        let [a,b,c] = condition;

        if(board[a] && (board[a] == board[b] && board[a] == board[c])) {
            return [a,b,c];
        } 
    } 
    return false;
}

restart.addEventListener('click', rest);

function rest() {
    board.fill(null);

    boxes.forEach(box => {
        box.innerText = '';
        alert1.innerHTML = '';
    })
    playerText.innerHTML = 'Tic Tac Toe'
    currentPlayer = X;
    document.getElementById('win-alert').style.visibility = "hidden";
    boxClick();
}


