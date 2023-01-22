import React from 'react'
import styled from 'styled-components';
const ResultStyle= styled.div`
grid-area:result;
background:#F89A56;
border-radius:15px;
margin:30px;
`;
const TipText=styled.text`
color:white;
position: absolute;
width: 120px;
height: 21px;
left: 472px;
top: 95px;
font-family: 'Ligconsolata';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 20.98px;
`;
const TipText2=styled.text`
color:white;
position: absolute;
width: 50px;
height: 21px;
left: 472px;
top: 183px;
font-family: 'Ligconsolata';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 20.98px;
`;
const TipSubline=styled.text`
color:#737373;
position: absolute;
width: 56px;
height: 17px;
left: 472px;
top: 115px;
font-family: 'Ligconsolata';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16.78px;
`;
const TipSubline2=styled.text`
color:#737373;
position: absolute;
width: 56px;
height: 17px;
left: 472px;
top: 203px;
font-family: 'Ligconsolata';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16.78px;
`;
const ResetButton= styled.button`
position: absolute;
width: 270px;
height: 45px;
left: 482px;
top: 381px;
background: #FFBC8C;
border-radius: 5px;
color:#AB9686;
font-family: Ligconsolata;
font-size: 24px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
border:none;
margin-left:-15px;
cursor:pointer;
`;
const TipPerPerson = styled.text`
height: 50px;
width: 144px;
left: 637px;
top: 88px;
font-family: Ligconsolata;
font-size: 48px;
font-weight: 400;
line-height: 50px;
letter-spacing: 0em;
text-align: left;
color: #FFD7BA;
margin-left: 180px;
margin-top: 50px;
display:inline-block;
`;
const TotalPerPerson = styled.text`
height: 50px;
width: 144px;
left: 637px;
top: 88px;
font-family: Ligconsolata;
font-size: 48px;
font-weight: 400;
line-height: 50px;
letter-spacing: 0em;
text-align: left;
color: #FFD7BA;
margin-left: 180px;
margin-top: 40px;
display:inline-block;
`;
const Result = () => {
  return (
    <ResultStyle>
       <TipText>Tip Amount</TipText><TipPerPerson>$ 0.00</TipPerPerson>
       <TipSubline>/person</TipSubline><TotalPerPerson>$ 0.00</TotalPerPerson>
       <TipText2>Total</TipText2>
       <TipSubline2>/person</TipSubline2>
       <ResetButton>Reset</ResetButton>
    </ResultStyle>
  )
}

export default Result