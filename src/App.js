import React, { useState } from "react";
import "./style.css"; // Import the styles

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // State for board squares
  const [isXNext, setIsXNext] = useState(true); // Toggle between X and O
  const winner = calculateWinner(board); // Check if there's a winner

  // Handle click on a square
  const handleClick = (index) => {
    if (board[index] || winner) return; // If square is filled or game is won, do nothing
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O"; // Assign X or O
    setBoard(newBoard);
    setIsXNext(!isXNext); // Toggle player
  };

  // Reset game function
  const restartGame = () => {
    setBoard(Array(9).fill(null)); // Reset the board
    setIsXNext(true); // Reset player turn
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <div key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </div>
        ))}
      </div>
      {winner ? (
        <div className="result">
          <h2>Winner: {winner}</h2>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      ) : (
        <h3>Next Player: {isXNext ? "X" : "O"}</h3>
      )}
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
