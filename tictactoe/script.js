'use strict';

const info = document.querySelector('#info');
const board = document.querySelector('#board');
const cells = ['','','','','','','','',''];

let crc = 'circle';
info.textContent = "Circle's turn first.";

function createBoard(){
    cells.forEach(() =>{
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.addEventListener('click',addSign)
        board.append(cellElement);
    })
}
createBoard();

function addSign(e){
    if (e.target.innerHTML == '') {
        const sign = document.createElement('div');
        sign.classList.add(crc);
        e.target.append(sign);
        let audio = new Audio("./audio.mp3");
        audio.play();
        if(crc == 'circle'){
            crc = 'cross';
        } else {
            crc = 'circle';
        }
        info.textContent = "It is now " + crc + "'s turn.";
        e.target.removeEventListener('click', addSign);
        checkWinner();
    } else {
        let error = new Audio("./error.mp3"); //bu hisse alinmadi :c 
        error.play();
    }
}

function checkWinner(){  //researched this section

    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    const allSquares = document.querySelectorAll('.square');

    winningCombos.forEach(array =>{
        const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
        const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'))

        if(circleWins || crossWins){
            info.textContent = circleWins ? "Circle Wins!" : "Cross Wins!";
            array.forEach(cellIndex => {
              allSquares[cellIndex].classList.add('winning-cell');
            });
            allSquares.forEach(square => square.removeEventListener('click', addSign));
        }
    })
}