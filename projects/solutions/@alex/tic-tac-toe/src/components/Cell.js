import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Placement from "./Placement";

// We want a 70px x 70px square
const Cellbox = styled.div`
  /* 68px width and height because the borders take up 1 px each side */
  width: 68px;
  height: 68px;
  border: 1px solid darkgray;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

const Cell = ({ placement, isGameOver, onClick }) => {
  return (
    <Cellbox
      onClick={() => {
        !isGameOver && onClick();
      }}
    >
      <Placement placement={placement} />
    </Cellbox>
  );
};

Cell.propTypes = {
  isGameOver: PropTypes.bool,
  placement: PropTypes.number,
  onClick: PropTypes.func,
};

export default Cell;
