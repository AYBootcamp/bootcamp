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

// internal helper component
const ResultSection = ({ subTitle, price = "0.00" }) => {
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
  price: PropTypes.string,
};

const ResetButton = styled.button`
  width: 270px;
  height: 45px;
  margin-bottom: 40px;
  color: #ab9686;
  font-size: 24px;
  font-weight: 400;
  :disabled {
    cursor: not-allowed;
  }
`;

const ResultDisplay = () => {
  return (
    <ResultDisplayContainer>
      {/* inline style */}
      <div style={{ flexGrow: 1, paddingTop: "60px" }}>
        <ResultSection subTitle="Tip Amount" />
        <ResultSection subTitle="Total" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ResetButton disabled>Reset</ResetButton>
      </div>
    </ResultDisplayContainer>
  );
};

export default ResultDisplay;
