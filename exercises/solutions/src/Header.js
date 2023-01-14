import React from 'react'
import styled from 'styled-components'

const HeaderStyles =styled.div`
  background: white;
  grid-area: main;
  padding: 40px;
  position:abosolute;
`;
const Title =styled.h1`
  color:#5C87DA;
  font-family:'Julius Sans One';
  vertical-align:left;
  text-align:left;
  line-height:auto;
  grid-area: main;
  margin-bottom:45px;
  `;
const Title2 =styled.h2`
  color:#f07642;
  vertical-align:top;
  font-size:25px;
  font-family:'IBM Plex Sans';
  line-height:auto;
  text-align:left;
`;
const ParaStyle=styled.p`
  vertical-align:top;
  font-size:20px;
  font-family:'IBM Plex Sans';
  line-height:auto;
  text-align:left;
  color:#696666;
`;
const Header = () => {
  return (
    <HeaderStyles>
      <Title>
        This is Headline.
      </Title>
      <Title2>
        30 Sapien a scelerisque pharetra, nisl erat
      </Title2>
      <ParaStyle>
        <p>
        Duis efficitur risus ut mauris hendrerit tempor.
        Curabitur faucibus, erat eu blandit condimentum, 
        sem nunc tempus lectus, nec dapibus est felis et magna.
        </p>
      </ParaStyle>
    </HeaderStyles>
  )
}

export default Header