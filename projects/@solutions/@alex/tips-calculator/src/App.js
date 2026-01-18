import "./App.css";

import React from "react";
import styled from "styled-components";

import TipsCalculator from "./components/TipsCalculator";

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
`;

function App() {
  return (
    <AppWrapper>
      <TipsCalculator />
    </AppWrapper>
  );
}

export default App;
