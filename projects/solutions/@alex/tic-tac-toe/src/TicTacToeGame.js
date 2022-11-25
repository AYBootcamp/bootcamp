import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Gameboard from "./components/Gameboard";
import { checkWinner } from "./helpers";

/*===================================
  Styled Components
===================================*/
const GameWrapper = styled.div`
  /* We want a full screen app */
  width: 100vw;
  height: 100vh;
  background-color: blanchedalmond;

  /* Center align */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Column direction */
  flex-direction: column;
`;

const GameInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RestartButton = styled.button`
  margin-top: 20px;
  border-radius: 5px;
  background-color: ghostwhite;
  width: 200px;
  height: 50px;
  border: 1px solid;
  :hover {
    cursor: pointer;
  }
`;

/*===================================
  Main Component
===================================*/
const TicTacToeGame = () => {
  /*===================================
    State variables
  ===================================*/
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState("draw");
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // Player go first
  const [gameboard, setGameboard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]); // use 1 to represent player, use -1 to represent computer

  /*===================================
    Helper functions
  ===================================*/
  // update the gameboard
  const updateBoard = (row, col, isPlayerTurn) => {
    const newGameboard = [...gameboard];
    newGameboard[row][col] = isPlayerTurn ? 1 : -1;
    setGameboard(newGameboard);
  };

  // Player moves and update the board
  const onPlayerMove = (coordinates) => {
    const [row, col] = coordinates;
    if (!isPlayerTurn || gameboard[row][col] !== 0) {
      return; // do nothing if it's not player's turn
    }
    updateBoard(row, col, isPlayerTurn);
    setIsPlayerTurn(!isPlayerTurn); // Change turn to computers
  };

  // Computer moves and update the board
  const onComputerMove = () => {
    // Calculate remaining coordinates to place move
    const remainingCoords = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (gameboard[row][col] === 0) {
          remainingCoords.push([row, col]);
        }
      }
    }
    // Basic AI: Random move
    const max = remainingCoords.length;
    const min = 0;
    const moveIndex = Math.floor(Math.random() * (max - min) + min); // Formula for random number within a range
    const move = remainingCoords[moveIndex];
    return move;
  };

  // Reset the game, set states to initial values
  const restartGame = () => {
    setIsGameOver(false);
    setWinner("draw");
    setIsPlayerTurn(true);
    setGameboard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };

  /*===================================
    UseEffects: Game logic
  ===================================*/
  // Check winner on each move
  useEffect(() => {
    const winner = checkWinner(gameboard);
    if (winner !== null) {
      setIsGameOver(true);
      setWinner(winner);
      return;
    } else {
      // If no winner, calculate computer's move
      if (!isPlayerTurn) {
        setTimeout(() => {
          const computerMove = onComputerMove();
          const [row, col] = computerMove;
          updateBoard(row, col, isPlayerTurn);
          setIsPlayerTurn(!isPlayerTurn);
        }, 1000); // 1s delay (thinking time)
      }
    }
  }, [isPlayerTurn]);

  return (
    <GameWrapper>
      <GameInfoSection>
        <h1>Tic-Tac-Toe Game!</h1>
        {isGameOver ? (
          <h3>Game is over! Winner is: {winner}</h3>
        ) : (
          <h3>Turn: {isPlayerTurn ? "Player" : "Computer"}</h3>
        )}
      </GameInfoSection>
      <Gameboard
        gameboard={gameboard}
        isGameOver={isGameOver}
        onCellClick={onPlayerMove}
      />
      {isGameOver && (
        <RestartButton onClick={restartGame}>Restart</RestartButton>
      )}
    </GameWrapper>
  );
};

export default TicTacToeGame;
