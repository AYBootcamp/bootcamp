import PropTypes from "prop-types";
import React from "react";
import styled, { keyframes } from "styled-components";

const sizeMap = {
    small: { width: '20px', height: '20px', border: '3px' },
    medium: { width: '40px', height: '40px', border: '4px' },
    large: { width: '60px', height: '60px', border: '5px' },
}
const rotate = keyframes`to {transform: rotate(360deg);}`;
const StyledSpinner = styled.div`
  animation: ${rotate} 1.5s linear infinite;
  border: solid ${(props) => props.size.border} #cfd0d1;
  border-top-color: #1c87c9;
  border-radius: 50%;
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
`;

const Spinner = ({ size }) => {
    return <StyledSpinner size={sizeMap[size]} />;
};

Spinner.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
};
export default Spinner;