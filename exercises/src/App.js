import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import SubLeft from './SubLeft';
import SubRight from './SubRight';
const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:  "main main""subleft subright";
  text-align: center;
  grid-gap: 0;
`;

const  App = () => {
    return (
        <Container>
            <Header/>
            <SubLeft/>
            <SubRight/>
        </Container>
    );
}

export default App;