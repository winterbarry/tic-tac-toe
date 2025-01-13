// ADD FUNCTION TO CHECK WIN STATE AND PLAYER WHO WON

//  2D array to store the game state for game board

const gameBoardItems = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

// click event listener
document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('placeholder'); // element to display game messages
    const cells = document.querySelectorAll('#game-board td'); // select all cells in the game board
    let currentPlayer = 'X'; // start the game with Player X

    // display a message and make placeholder visible
    function setMessage(text) {     
        message.textContent = text; 
        message.classList.remove('hidden'); 
        message.classList.add('visible');
    }

    // handle a player's move when a cell is clicked
    function handleClick(event) {
        const clickedCell = event.target; // get the cell that was clicked
        const cellIndex = Array.from(cells).indexOf(clickedCell); // determine the index of the clicked cell
        const row = Math.floor(cellIndex / 3); // calculate the row index in the 2D array
        const col = cellIndex % 3; // calculate the column index in the 2D array

        // ignore clicks on cells that are already occupied
        if (gameBoardItems[row][col] !== '') {
            return;
        }

        // update the clicked cell with the current player's marker
        gameBoardItems[row][col] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        // toggle the current player between X and O
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        // display whose turn it is
        setMessage(`Player ${currentPlayer}'s turn`);
    }

    // attach the click event listener to each cell in the game board
    cells.forEach(cell => cell.addEventListener('click', handleClick)); 
});


