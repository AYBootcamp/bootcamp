import {React,UseState} from 'react';

import styled from 'styled-components';
import { useState } from 'react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const BillStyles = styled.div`
grid-area:bill;
`;
const BillText=styled.text`
color:#6D6D6D;
position: absolute;
width: 64px;
height: 34px;
left: 41px;
top: 44px;
font-family: 'Ligconsolata';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 34px;
`;
const BillEnter= styled.input`
height: 37px;
width: 320px;
left: 0px;
top: 0px;
border-radius: 5px;
background: #FDD8BE;
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
}
::-webkit-outer-spin-button{
    -webkit-appearance: none; 
}    
`;

const Bill = () => {
  const [Bill, setBill] = useState(0);
  const handleChange = (event)=>{
    event.preventDefault();
    setBill(keyboard);
  }
    return (
    <BillStyles>
       <BillText>Bill</BillText> 
       <BillEnter placeholder="0" type="number" className='billAmount' onChange = {handleChange} />
    </BillStyles>
  )
}
export default Bill;


