import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { SectionTitle } from "../sharedComponents";

const TipsButton = styled.button`
  background-color: #f89a56;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 24px;
  font-weight: 400;
  width: 112px;
  height: 42px;
  margin: 13px 15px 0 0;
  // dynamically set style to highlight the selected button
  border: ${(props) => (props.isSelected ? "3px solid black" : "")};
  /* CSS selector */
  :hover {
    cursor: pointer;
  }
  :disabled {
    background-color: #c6b5aa;
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// list of button props to render
export const buttonProps = [
  { text: "5%", enabled: true, value: 0.05 },
  { text: "10%", enabled: true, value: 0.1 },
  { text: "15%", enabled: true, value: 0.15 },
  { text: "25%", enabled: true, value: 0.25 },
  { text: "50%", enabled: true, value: 0.5 },
  { text: "Custom", enabled: false },
];

const TipsSection = ({ selectedButtonIndex, setSelectedButtonIndex }) => {
  return (
    <section>
      <SectionTitle title="Select Tip %" />
      <ButtonGroup>
        {/* use map to render multiple similar components */}
        {buttonProps.map((buttonProp, index) => (
          <TipsButton
            key={`tips-button-${index}`}
            disabled={!buttonProp.enabled}
            onClick={() =>
              setSelectedButtonIndex(
                index === selectedButtonIndex ? null : index
              )
            }
            isSelected={selectedButtonIndex === index}
          >
            {buttonProp.text}
          </TipsButton>
        ))}
      </ButtonGroup>
    </section>
  );
};

TipsSection.propTypes = {
  selectedButtonIndex: PropTypes.number,
  setSelectedButtonIndex: PropTypes.func,
};

export default TipsSection;
