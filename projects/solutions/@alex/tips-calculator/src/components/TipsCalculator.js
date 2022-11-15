import React from "react";
import styled from "styled-components";

import BillSection from "./BillSection";
import PeopleSection from "./PeopleSection";
import ResultDisplay from "./ResultDisplay";
import TipsSection from "./TipsSection";

// container for the calculator component
const CalculatorWrapper = styled.div`
  height: 500px;
  background-color: white;
  border-radius: 25px;
  padding: 0 40px;
  display: flex; // use flex layout
`;

const InputSections = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TipsCalculator = () => {
  return (
    <CalculatorWrapper>
      <InputSections>
        <BillSection />
        <TipsSection />
        <PeopleSection />
      </InputSections>
      <ResultDisplay />
    </CalculatorWrapper>
  );
};

export default TipsCalculator;
