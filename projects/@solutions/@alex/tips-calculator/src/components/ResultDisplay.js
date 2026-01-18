import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ResultDisplayContainer = styled.div`
  background-color: #f89a56;
  width: 365px;
  height: 430px;
  border: none;
  border-radius: 15px;
  margin: 35px 0px 35px 28px;
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  padding: 0 20px 40px 37px;
`;

const PriceLabel = styled.label`
  flex-grow: 1;
  & > h3 {
    color: #ffffff;
    font-size: 20px;
    margin: 0;
    font-weight: 400;
  }
  & > span {
    font-weight: 400;
    font-size: 16px;
    color: #737373;
  }
`;

const PriceDisplay = styled.span`
  font-weight: 400;
  font-size: 48px;
  color: #ffd7ba;
`;

// internal helper component
const ResultSection = ({ subTitle, price = 0 }) => {
  return (
    <StyledSection>
      <PriceLabel>
        <h3>{subTitle}</h3>
        <span>/person</span>
      </PriceLabel>
      <PriceDisplay>$ {price}</PriceDisplay>
    </StyledSection>
  );
};

ResultSection.propTypes = {
  subTitle: PropTypes.string,
  price: PropTypes.number,
};

const ResetButton = styled.button`
  width: 270px;
  height: 45px;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 400;
  background-color: beige;
  border: none;
  :disabled {
    cursor: not-allowed;
    color: #ab9686;
    background-color: lightgray;
  }
  :hover {
    cursor: pointer;
  }
`;

const CalculateButton = styled.button`
  width: 270px;
  height: 45px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 400;
  background-color: beige;
  border: none;
  :hover {
    cursor: pointer;
  }
  :disabled {
    background-color: lightgray;
    color: #ab9686;
    cursor: not-allowed;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ResultDisplay = ({
  isCalculateDisabled,
  isResetDisabled,
  tipPerPerson,
  totalPerPerson,
  calculate,
  reset,
}) => {
  return (
    <ResultDisplayContainer>
      {/* inline style */}
      <div style={{ flexGrow: 1, paddingTop: "60px" }}>
        <ResultSection subTitle="Tip Amount" price={tipPerPerson} />
        <ResultSection subTitle="Total" price={totalPerPerson} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonsWrapper>
          <CalculateButton disabled={isCalculateDisabled} onClick={calculate}>
            Calculate
          </CalculateButton>
          <ResetButton disabled={isResetDisabled} onClick={reset}>
            Reset
          </ResetButton>
        </ButtonsWrapper>
      </div>
    </ResultDisplayContainer>
  );
};

ResultDisplay.propTypes = {
  isCalculateDisabled: PropTypes.bool,
  isResetDisabled: PropTypes.bool,
  tipPerPerson: PropTypes.number,
  totalPerPerson: PropTypes.number,
  calculate: PropTypes.func,
  reset: PropTypes.func,
};

export default ResultDisplay;
