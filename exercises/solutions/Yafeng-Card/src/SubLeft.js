import React from 'react'
import styled from 'styled-components';
const Header1Style =styled.h2`
    font-size:33px;
    align-item:left;
    font-family:'IBM Plex Sans';
    font-weight:500px;
    line-height:41.6px;
    margin:60px;
    padding-top:10px;
`;
const SubLeftStyles = styled.div`
    display:flex;
    background: #46649D;
    height:483.73px;
    width:100%;
    
`;
const PriceStyle= styled.text`
    position: absolute;
    width: 226.87px;
    height: 89.25px;
    padding-top: 200px;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 73px;
    color: #FFFFFF;
    margin-left:50px;
`;
const ButtonStyle = styled.button`
    width: 450px;
    height: 72.72px;
    background: #ED9C62;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    margin-top:50%;
    margin-right:20%;
    margin-left:-52%;
   
`;
const SignUpStyle= styled.text` 
    color:white;
    font-size:25px;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
`;

const SubLeft = () => {
  return (
    <SubLeftStyles>
        <Header1Style>
            Monthly Subscription
        </Header1Style>
        <PriceStyle>
           $9.99/Month
        </PriceStyle>
        <ButtonStyle>
            <SignUpStyle>
            Sign up
            </SignUpStyle> 
        </ButtonStyle>
        
    </SubLeftStyles>
  )
}

export default SubLeft;
