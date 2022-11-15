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

const TipsSection = () => {
  // list of button props to render
  const buttonProps = [
    { text: "5%", enabled: true },
    { text: "10%", enabled: true },
    { text: "15%", enabled: true },
    { text: "25%", enabled: true },
    { text: "50%", enabled: true },
    { text: "Custom", enabled: false },
  ];

  return (
    <section>
      <SectionTitle title="Select Tip %" />
      <ButtonGroup>
        {buttonProps.map((buttonProp, index) => (
          <TipsButton
            key={`tips-button-${index}`}
            disabled={!buttonProp.enabled}
          >
            {buttonProp.text}
          </TipsButton>
        ))}
      </ButtonGroup>
      {/* use map to render multiple similar components */}
    </section>
  );
};

export default TipsSection;
