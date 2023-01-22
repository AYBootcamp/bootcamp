import React from 'react'
import styled from 'styled-components';
const NumStyle= styled.div`
grid-area:people;
`;
const NumberEnter= styled.input`
height: 37px;
width: 320px;
left: 0px;
top: 0px;
border-radius: 5px;
background: #FDD8BE;
input-type:number;
margin-top:80px;
margin-left:40px;
border:none;
text-align:right;
font-family: 'Ligconsolata';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 25px;
color: #626262;
::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}
::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}    
`;
const NumText=styled.text`
color:#6D6D6D;
position: absolute;
width: 300px;
height: 34px;
left: 41px;
top: 369px;
font-family: 'Ligconsolata';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 33.57px;
`;
const NumOfPeople = () => {
  return (
    <NumStyle>
      <NumText>Number of People</NumText>
      <NumberEnter placeholder='0' type='number' min='0' />
    </NumStyle>
  )
}

export default NumOfPeople