import "./App.css";

import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";

import Gameboard from "./components/Gameboard";

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
/**
 * This is the top most component that contains our tic tac toe game
 */

const TicTacToeGame = () => {
  /*===================================
    Game logic
  ===================================*/
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState("draw");
  const [isPlayerTurn, setIsPlayerTurn] = useState(true); // Player go first
  const [gameboard, setGameboard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]); // use 1 to represent player, use -1 to represent computer

  // Helper function to update the board, this is reusble
  const updateBoard = (row, col, isPlayerTurn) => {
    const newGameboard = [...gameboard];
    newGameboard[row][col] = isPlayerTurn ? 1 : -1;
    setGameboard(newGameboard);
  };

  const onPlayerMove = (coordinates) => {
    const [row, col] = coordinates;
    if (!isPlayerTurn || gameboard[row][col] !== 0) {
      return; // do nothing if it's not player's turn
    }
    updateBoard(row, col, isPlayerTurn);
    setIsPlayerTurn(!isPlayerTurn); // Change turn to computers
  };

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

  useEffect(() => {
    if (!isPlayerTurn) {
      // Computer's turn, simulate 2s of thinking time.
      setTimeout(() => {
        const computerMove = onComputerMove();
        const [row, col] = computerMove;
        updateBoard(row, col, isPlayerTurn);
        setIsPlayerTurn(!isPlayerTurn);
      }, 2000); // 2s delay
    }
  }, [isPlayerTurn]);

  useEffect(() => {
    // Logic to check if game is over
    for (let i = 0; i < 3; i++) {
      // Check Rows
      if (
        gameboard[i][0] !== 0 &&
        gameboard[i][0] === gameboard[i][1] &&
        gameboard[i][0] === gameboard[i][2]
      ) {
        setWinner(gameboard[i][0] === 1 ? "player" : "computer");
        setIsGameOver(true);
        break;
      }
      // Check columns
      if (
        gameboard[i][0] !== 0 &&
        gameboard[0][i] === gameboard[1][i] &&
        gameboard[0][i] === gameboard[2][i]
      ) {
        setWinner(gameboard[0][i] === 1 ? "player" : "computer");
        setIsGameOver(true);
        break;
      }
    }

    // Check diagnals
    if (
      gameboard[0][0] !== 0 &&
      gameboard[0][0] === gameboard[1][1] &&
      gameboard[0][0] === gameboard[2][2]
    ) {
      setWinner(gameboard[0][0] === 1 ? "player" : "computer");
      setIsGameOver(true);
    }

    if (
      gameboard[2][0] !== 0 &&
      gameboard[2][0] === gameboard[1][1] &&
      gameboard[2][0] === gameboard[0][2]
    ) {
      setWinner(gameboard[0][0] === 1 ? "player" : "computer");
      setIsGameOver(true);
    }
  }, [gameboard]);

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
      <Gameboard gameboard={gameboard} onCellClick={onPlayerMove} />
      {isGameOver && (
        <RestartButton onClick={restartGame}>Restart</RestartButton>
      )}
    </GameWrapper>
  );
};

export default TicTacToeGame;
