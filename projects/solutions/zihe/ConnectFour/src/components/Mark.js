import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Ball = keyframes`
0%{transform: translateY(-30px)}
100%{transform: translateY(0px)}`

const UserMark = styled.div`
  width:0px;
  height:0px;
  border: 25px solid goldenrod;
  border-radius: 50%;
  animation: ${Ball} 800ms
  `
const ComputerMark = styled.div`
  width:0px;
  height:0px;
  border: 25px solid silver;
  border-radius: 50%;
  animation: ${Ball} 800ms`

const Mark = ({ mark }) => {
  switch (mark) {
    case 1: return <UserMark />;
    case 2: return <ComputerMark />;
    default: return <div />;
  }
}
Mark.propTypes = {
  mark: PropTypes.number
}
export default Mark; 