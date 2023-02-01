import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Gameboard from './components/Gameboard';
import { check } from './check';

const GameWrapper = styled.div`
width:100vw;
height: 100vh;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
`
const GameInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const UserMark = styled.div`
width:0px;
height:0px;
border: 25px solid goldenrod;
border-radius: 50%;
`
export const ComputerMark = styled.div`
width:0px;
height:0px;
border: 25px solid silver;
border-radius: 50%;
`
const ColorIndicator = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const UserMarker = styled.span`
display:flex;
justify-content: center;
align-items: center;
padding-right: 20px;
`
const ComputerMarker = styled.span`
display:flex;
justify-content: center;
align-items: center;
padding-left: 20px;
`
const RestartButton = styled.button`
margin:10px;
border-radius: 10px;
width: 100px;
height: 40px;
border: 1px solid;
:hover {
  cursor: pointer;
}
`
const Game = () => {
  const [gameboard, setGameboard] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState('draw');
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', mouseMove)
  })

  const updateBoard = (row, col, isPlayerTurn) => {
    const newBoard = [...gameboard];
    newBoard[row][col] = isPlayerTurn ? 1 : 2;
    setGameboard(newBoard);
  }
  const playerMove = (coordinates) => {
    let [row, col] = coordinates;
    if (!isPlayerTurn || gameboard[row][col] !== 0) { return; }
    for (let playerRow = 5; playerRow >= row; playerRow--) {
      if (gameboard[playerRow][col] === 0) {
        row = playerRow;
        break
      }
    }
    updateBoard(row, col, isPlayerTurn);
    setIsPlayerTurn(!isPlayerTurn);
  }
  const computerMove = () => {
    const remainingCoords = [];
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        if (gameboard[row][col] === 0) {
          remainingCoords.push([row, col]);
        }
      }
    }
    const max = remainingCoords.length;
    const min = 0;
    const moveIndex = Math.floor(Math.random() * (max - min) + min);
    const move = remainingCoords[moveIndex];
    const computerRow = move[0];
    const computerCol = move[1];
    for (let newRow = 5; newRow >= computerRow; newRow--) {
      if (gameboard[newRow][computerCol] === 0) { return [newRow, computerCol] }
    }
  }
  const restartGame = () => {
    setIsGameOver(false);
    setWinner('draw');
    setIsPlayerTurn(true);
    setGameboard([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ])
  }

  useEffect(() => {
    const winner = check(gameboard);
    if (winner !== null) {
      setIsGameOver(true);
      setWinner(winner);
      return;
    } else {
      if (!isPlayerTurn) {
        setTimeout(() => {
          const [row, col] = computerMove();
          updateBoard(row, col, isPlayerTurn);
          setIsPlayerTurn(!isPlayerTurn);
        }, 1000)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlayerTurn]);

  return (
    <GameWrapper>
      <GameInfo>
        <UserMark style={{ position: "absolute", left: coords.x - 22, top: coords.y + 5 }} />
        <h2>Connect Four</h2>
        <ColorIndicator>
          <UserMarker><UserMark />User </UserMarker>
          <ComputerMarker><ComputerMark />Computer</ComputerMarker>
        </ColorIndicator>
        <div>
          {isGameOver ? (winner === 'draw' ? (<h3>No more moves! Draw!</h3>)
            : (<h3>Game is over! Winner is: {winner}</h3>)) : (<h3>
              Turn: {isPlayerTurn ? 'User' : 'Computer'}</h3>)}
        </div>
      </GameInfo>
      <Gameboard
        gameboard={gameboard}
        isGameOver={isGameOver}
        cellClick={playerMove} />
      {isGameOver && (<RestartButton
        onClick={restartGame}>Restart</RestartButton>)}
    </GameWrapper>
  );
}
export default Game;