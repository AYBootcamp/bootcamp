import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

// Render a circle to represent player's mark
const PlayerMark = styled.div`
  width: 50%;
  height: 50%;
  border: 5px solid black;
  border-radius: 50%;
`;

// Render an X to represent computer's mark
const ComputerMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 50px;
  user-select: none;
`;

const Mark = ({ mark }) => {
  switch (mark) {
    case 1:
      return <PlayerMark />;
    case -1:
      return <ComputerMark>X</ComputerMark>;
    default:
      return <div />;
  }
};

Mark.propTypes = {
  mark: PropTypes.number,
};

export default Mark;
