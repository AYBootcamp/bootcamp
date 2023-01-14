import React from 'react';
import styled from 'styled-components';
import { Link, BrowserRouter } from 'react-router-dom';

const SubRightStyles = styled.div`
  display: flex;
  gap:0;
  padding: 0;
  align-items: right;
  grid-area: subright;
  justify-content: center;
  background: #4D72B9;
  height:483.73px;
  width:786.41px;
`;
const Header1Style = styled.h2`
    font-size:33px;
    font-family:'IBM Plex Sans';
    font-weight:500px;
    line-height:41.6px;
    margin-top:70px;
    margin-left:-400px;
`;
const ListStyle = styled.ul`
    width: 200px;
    height: 100px;
    text-align: left;
    font-family: 'IBM Plex Sans';
    font-size: 20px;
    margin-top:30%;
    color: #FFFFFF;
    list-style:none;
    margin-left:-140px;
`;

const SubRight = () => {
  return (
    <SubRightStyles>
        <Header1Style>
            Why us
        </Header1Style>
        <BrowserRouter>
            <ListStyle>
    
                <li><Link>Community</Link></li>
                <li><Link>About us</Link></li>
                <li><Link>Learn more</Link></li>

            </ListStyle>
        </BrowserRouter>
            
        
    </SubRightStyles>
)}

export default SubRight
