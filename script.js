document.addEventListener('DOMContentLoaded', function() {
    // element where game messages will be displayed
    const message = document.getElementById('placeholder'); 
    
    // select all cells in the tic-tac-toe game board
    const cells = document.querySelectorAll('#game-board td'); 
    
    // player X starts the game
    let currentPlayer = 'X'; 

    // 2D array to store the game state of the board
    const gameBoardItems = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    // array of all possible winning conditions
    const winConditions = [
        [[0, 0], [0, 1], [0, 2]], 
        [[1, 0], [1, 1], [1, 2]], 
        [[2, 0], [2, 1], [2, 2]], 
        [[0, 0], [1, 0], [2, 0]], 
        [[0, 1], [1, 1], [2, 1]], 
        [[0, 2], [1, 2], [2, 2]], 
        [[0, 0], [1, 1], [2, 2]], 
        [[0, 2], [1, 1], [2, 0]], 
    ];

    // display a game message and make it visible
    function setMessage(text) {     
        message.textContent = text; 
        message.classList.remove('hidden'); 
        message.classList.add('visible'); 
    }

    // remove event listeners from all cells, stopping further input
    function disableInput() {
        cells.forEach(cell => cell.removeEventListener('click', handleClick));
    }

    // handle a click event on a cell
    function handleClick(event) {
        const clickedCell = event.target; // get the cell that was clicked
        const cellIndex = Array.from(cells).indexOf(clickedCell); // get the index of the clicked cell in the 1D cell array
        const row = Math.floor(cellIndex / 3); // calculate the row index 
        const col = cellIndex % 3; // calculate the column index 

        // ignore click on occupied cells
        if (gameBoardItems[row][col] !== '') {
            return;
        }

        // update the game board and table with the current player's marker
        gameBoardItems[row][col] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        // toggle between player'X' and 'O'
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        // display the next player's turn
        setMessage(`Player ${currentPlayer}'s turn`);

        // check for a winner
        function checkWinner(gameBoardItems, winConditions) {
            for (let condition of winConditions) {
                // check if all cells in a winning condition belong to player 'X'
                if (condition.every(([row, col]) => gameBoardItems[row][col] === 'X')) {
                    setMessage("Player X won!"); 
                    disableInput(); 
                    return;
                }
                // check if all cells in a winning condition belong to player 'O'
                if (condition.every(([row, col]) => gameBoardItems[row][col] === 'O')) {
                    setMessage("Player O won!"); 
                    disableInput(); 
                    return;
                }
            }
            return null; // return null if no winner is found
        }

        // check if the board is full 
        const isBoardFull = gameBoardItems.flat().every(cell => cell !== '');
        if (isBoardFull) {
            setMessage("It's a tie!"); 
            disableInput(); 
            return; 
        }

        checkWinner(gameBoardItems, winConditions);
    }

    // click event listener for each cell in the game board
    cells.forEach(cell => cell.addEventListener('click', handleClick)); 
});
