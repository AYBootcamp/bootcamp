import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Cell from "./Cell";

// Use flexbox to get the 3 by 3 board, we know the cells are 70px width, so 3 cells = 210px
const BoardWrapper = styled.div`
  display: flex;
  width: 210px;
  flex-wrap: wrap; // allow wrapping
`;

/**
 * Gameboard is the where we place Cells
 */
const Gameboard = ({ gameboard, isGameOver, onCellClick }) => {
  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        board.push(
          <Cell
            key={`cell-${row}-${col}`}
            placement={gameboard[row][col]}
            isGameOver={isGameOver}
            onClick={() => onCellClick([row, col])}
          />
        );
      }
    }
    return board;
  };
  return <BoardWrapper>{renderBoard()}</BoardWrapper>;
};

Gameboard.propTypes = {
  gameboard: PropTypes.arrayOf(PropTypes.array),
  isGameOver: PropTypes.bool,
  onCellClick: PropTypes.func,
};

export default Gameboard;
