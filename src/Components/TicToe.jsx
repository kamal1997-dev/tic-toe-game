import { useState, useEffect } from "react";
import useTicToe from "../hooks/useTicToe";

const TicToe = () => {
  console.log(useTicToe());
  const { board, handleClick, calculateWinner, getStausMessage, reSetGame } =
    useTicToe();
  return (
    <>
      <div className="game">
        <div className="status">
          {getStausMessage()}
          <button onClick={reSetGame}>Reset Game</button>
        </div>
        <div className="board">
          {board.map((b, index) => {
            return (
              <button 
              onClick={()=>handleClick(index)}
              className="cell"
              disabled={b!==null}
               key={index}>
               {b}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TicToe;
