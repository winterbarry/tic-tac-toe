// player factoy
const playerFactory = (name, marker) => ({
    name,
    marker
});

gameBoard = (() => {
    // element where game messages will be displayed
    let message = document.getElementById('placeholder');

    let cells = document.querySelectorAll('#game-board td'); 

    // 2D array to store the game state of the board
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    // set message in placeholder
    function setMessage(text) {     
        message.textContent = text; 
        message.classList.remove('hidden'); 
        message.classList.add('visible'); 
    }

    // reset text content in the table cells
    function resetBoard() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
    
        // clear each cell in the 2d array
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                board[row][col] = ''; 
            }
        }
    }

    return { resetBoard, setMessage, cells, board };
})();

mainLogic = (() => {
    const player1 = playerFactory("Player 1", "X");
    const player2 = playerFactory("Player 2", "O");
    let currentPlayer = player1;

    // Handle a click event on a cell
    function handleClick(event) {
        const clickedCell = event.target; // get the clicked cell
        const cellIndex = Array.from(gameBoard.cells).indexOf(clickedCell); // get the index of the clicked cell in the 1D cell array
        const row = Math.floor(cellIndex / 3); // calculate the row index
        const col = cellIndex % 3; // calculate the column index

        // ignore click on occupied cells
        if (gameBoard.board[row][col] !== '') {
            return;
        }

        // update the game board and table with the current player's marker
        gameBoard.board[row][col] = currentPlayer.marker;
        clickedCell.textContent = currentPlayer.marker;

        // check for a winner or tie
        if (checkWinner()) {
            return;
        }

        // toggle between players
        currentPlayer = currentPlayer === player1 ? player2 : player1;

        // show the next player's turn
        gameBoard.setMessage(`${currentPlayer.name}'s turn!`);
    }

    function disableInput() {
        gameBoard.cells.forEach(cell => cell.removeEventListener('click', handleClick));
    }

    function checkWinner() {
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

        for (let condition of winConditions) {
            // if all cells in a winning condition belong to player1
            if (condition.every(([row, col]) => gameBoard.board[row][col] === player1.marker)) {
                gameBoard.setMessage("Player X won!");
                disableInput();
                return true; 
            }
            // if all cells in a winning condition belong to player2
            if (condition.every(([row, col]) => gameBoard.board[row][col] === player2.marker)) {
                gameBoard.setMessage("Player O won!");
                disableInput();
                return true; 
            }
        }

        // if the board is full / tie condition
        const isBoardFull = gameBoard.board.flat().every(cell => cell !== '');
        if (isBoardFull) {
            gameBoard.setMessage("It's a tie!");
            disableInput();
            return true; 
        }

        return false; 
    }

    function restartGame() {
        gameBoard.resetBoard();
        currentPlayer = player1;
        gameBoard.setMessage(`${currentPlayer.name}'s turn!`);
        console.log("Game restarted. Current board state is:");
        console.log(gameBoard.board);
    }

    return { handleClick, restartGame };
})();

domManager = (() => {
    const resetButton = document.getElementById('resetButton');

    function initialize() {
        gameBoard.cells.forEach(cell => cell.addEventListener('click', mainLogic.handleClick)); 
        resetButton.addEventListener('click', mainLogic.restartGame);
    }

    return {initialize};
})();

document.addEventListener('DOMContentLoaded', domManager.initialize);
