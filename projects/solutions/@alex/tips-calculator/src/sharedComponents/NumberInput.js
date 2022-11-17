import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledInputField = styled.input`
  background-color: #fdd8be;
  border-radius: 5px;
  width: 366px;
  border: none;
  padding: 9px 15px;
  font-size: 24px;
  text-align: end;
  color: #626262;
`;

const NumberInput = ({ value, onChange }) => {
  return (
    <StyledInputField
      type="number"
      placeholder="0"
      value={value}
      onChange={onChange}
    />
  );
};

NumberInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default NumberInput;
