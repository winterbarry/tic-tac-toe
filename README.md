# Tic-Tac-Toe Game

## Overview

This is a browser-based implementation of the classic **Tic-Tac-Toe** game, built using HTML, CSS, and JavaScript and allows two players to take turns marking the game board. The game provides real-time feedback on the current player's turn, declares a winner when one player achieves a winning condition, and identifies tie games. A reset button is available to restart the game.

---

## Features

- **Two-Player Game**: Supports two players, Player 1 (X) and Player 2 (O).
- **Dynamic Game Board**: Clickable cells for marking turns.
- **Winner Detection**: Detects winning combinations and displays the result.
- **Tie Detection**: Identifies ties when the board is full without a winner.
- **Reset Button**: Allows players to restart the game at any time.
- **Real-Time Messaging**: Displays whose turn it is and game results.

---

## How to Play

1. Open the game in any modern browser.
2. Player 1 begins the game and uses the marker **X**.
3. Player 2 takes their turn and uses the marker **O**.
4. Players alternate turns by clicking on empty cells.
5. The game ends when:
   - A player wins by marking three cells in a row, column, or diagonal.
   - The board is full, and no player wins (tie).
6. Use the **RESET** button to restart the game.

---

## File Structure

### 1. HTML (`index.html`)
Defines the structure of the game board and includes references to the styles and scripts.

- **Game Board**: A 3x3 table representing the Tic-Tac-Toe grid.
- **Reset Button**: A button for restarting the game.

### 2. CSS (`style.css`)
Provides styles for the game layout, including the table, cells, and messaging.

- **Board Styling**: Aligns the table in the center and defines the cell sizes.
- **Dynamic Messaging**: Displays game status messages.

### 3. JavaScript (`script.js`)
Implements the game logic and handles interactions.

- **`playerFactory`**: Creates player objects with names and markers.
- **`gameBoard` Module**: Manages the board state and messaging.
- **`mainLogic` Module**: Handles gameplay, including turn-taking, winner detection, and reset functionality.
- **`domManager` Module**: Initializes event listeners for the game.

---

## Game Logic

1. **Player Turns**: Players take turns marking empty cells.
2. **Winner Detection**: Checks predefined win conditions (rows, columns, diagonals) after every move.
3. **Tie Detection**: Determines if the board is full without a winner.
4. **Game Reset**: Clears the board and resets the game state when the reset button is clicked.

---

## Requirements

- A modern web browser (e.g., Chrome, Firefox, Safari).
- No additional libraries or dependencies are needed.

---

## How to Run

1. Clone or download the project files.
2. Open the `index.html` file in a web browser.
3. Play the game!

