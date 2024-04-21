import React, { useState } from "react";
const initialValue = () => Array(9).fill(null);

const useTicToe = () => {
  const [board, setBoard] = useState(initialValue());
  const [isNext, setIsNext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    // check the winner;
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isNext);
  };
  const reSetGame = () => {
    setBoard(initialValue());
    setIsNext(true);
  };
  const getStausMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} Wins!`;

    if (!board.includes(null)) return "It's a draw!";

    return `Player ${isNext ? "X" : "O"} turn`;
  };

  return { board, handleClick, calculateWinner, getStausMessage, reSetGame };
};

export default useTicToe;
