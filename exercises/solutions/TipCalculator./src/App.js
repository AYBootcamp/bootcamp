import React from 'react';
import styled from 'styled-components';
import Bill from'./Bill';
import TipPercentage from './TipPercentage';
import Result from './Result';
import NumOfPeople from './NumOfPeople';

const Container = styled.div`
  display: grid;
  background: #F4F4F4;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0fr;
  grid-template-areas:  "bill result""percentage result"" people result";
  grid-gap: 0.5fr;
  border-radius:25px;
  position: relative;
  width: 800px;
  height: 500px;
  margin:20%;
  `;
const App = () => {
  return (
   <Container>
        <Bill/>
        <TipPercentage/>
        <NumOfPeople/>
        <Result/>
   </Container>
  )
}

export default App