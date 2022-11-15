import React, { useState } from "react";
import styled from "styled-components";

import BillSection from "./BillSection";
import PeopleSection from "./PeopleSection";
import ResultDisplay from "./ResultDisplay";
import TipsSection, { buttonProps } from "./TipsSection";

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
  /* 
  Define state variable at parent component and pass it down.
  why do we do this?
  */
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const [tipPerPerson, setTipPerPerson] = useState(null);
  const [totoalPerPerson, setTotalPerPerson] = useState(null);

  const calculate = () => {
    const tip = bill * (1 + buttonProps[selectedButtonIndex].value);
    const total = bill + tip;
    setTotalPerPerson(Math.round((total / people) * 100) / 100);
    setTipPerPerson(Math.round((tip / people) * 100) / 100);
  };

  const reset = () => {
    setBill(0);
    setPeople(0);
    setTotalPerPerson(0);
    setTipPerPerson(0);
    setSelectedButtonIndex(null);
  };

  const isCalculateDisabled =
    bill === 0 || people === 0 || selectedButtonIndex === null;
  const isResetDisabled =
    bill === 0 && people === 0 && selectedButtonIndex === null;

  console.log({ selectedButtonIndex, people, bill });
  return (
    <CalculatorWrapper>
      <InputSections>
        <BillSection bill={bill} setBill={setBill} />
        <TipsSection
          selectedButtonIndex={selectedButtonIndex}
          setSelectedButtonIndex={setSelectedButtonIndex}
        />
        <PeopleSection people={people} setPeople={setPeople} />
      </InputSections>
      <ResultDisplay
        isCalculateDisabled={isCalculateDisabled}
        isResetDisabled={isResetDisabled}
        tipPerPerson={tipPerPerson}
        totoalPerPerson={totoalPerPerson}
        calculate={calculate}
        reset={reset}
      />
    </CalculatorWrapper>
  );
};

export default TipsCalculator;
