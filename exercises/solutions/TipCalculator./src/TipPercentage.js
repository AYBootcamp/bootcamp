import React from 'react'
import styled from 'styled-components';
const TipStyle = styled.div`
grid-area:percentage;
`;
const TipA=styled.button`
height: 42px;
width: 100px;
left: 0px;
top: 0px;
border-radius: 5px;
color: #FFFFFF;
background: #F89A56;
font-size:24px;
font-weight:400;
margin-left:40px;
margin-top:100px;
border:none;
cursor:pointer;
`;
const TipB=styled.button`
height: 42px;
width: 100px;
left: 0px;
top: 0px;
border-radius: 5px;
color: #FFFFFF;
background: #F89A56;
font-size:24px;
font-weight:400;
margin-left: 10px;
margin-top:100px;
border:none;
cursor:pointer;
`;
const TipC=styled.button`
height: 42px;
width: 100px;
left: 0px;
top: 0px;
border-radius: 5px;
color: #FFFFFF;
background: #F89A56;
font-size:24px;
font-weight:400;
margin-left: 10px;
margin-top:100px;
border:none;
cursor:pointer;
`;
const TipD=styled.button`
height: 42px;
width: 100px;
left: 0px;
top: 0px;
border-radius: 5px;
color: #FFFFFF;
background: #F89A56;
font-size:24px;
font-weight:400;
margin-left:40px;
margin-top:20px;
border:none;
cursor:pointer;
`;
const TipE=styled.button`
height: 42px;
width: 100px;
left: 0px;
top: 0px;
border-radius: 5px;
color: #FFFFFF;
background: #F89A56;
font-size:24px;
font-weight:400;
margin-left:10px;
margin-top:20px;
border:none;
cursor:pointer;
`;
const TipF=styled.button`
height: 42px;
width: 100px;
left: 0px;
top: 0px;
border-radius: 5px;
color: #FFFFFF;
background: #C6B5AA;
font-size:20px;
font-weight:400;
margin-left:10px;
margin-top:20px;
border:none;
cursor:pointer;
`;
const TipText=styled.text`
color:#6D6D6D;
position: absolute;
width: 192px;
height: 34px;
left: 41px;
top: 173px;
font-family:'Inconsolata'

font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 34px;
grid-area:a;
`;
const TipPercentage = () => {
  return (
    <TipStyle>
      <TipText>Select Tip %</TipText>
      <TipA value='0.05'>5%</TipA>
      <TipB value='0.1'>10%</TipB>
      <TipC value='0.15'>15%</TipC>
      <TipD value='0.25'>25%</TipD>
      <TipE value='0.5'>50%</TipE>
      <TipF>Custom</TipF>
    </TipStyle>
  )
}

export default TipPercentage