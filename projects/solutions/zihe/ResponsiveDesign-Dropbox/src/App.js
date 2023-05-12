import React, { useState } from 'react';
import styled from "styled-components"
import dropboxOverview from './image/section1.png'
import dropboxProducts from './image/section2.png'
import useDropbox from './image/section3.png'
import dropdown1 from './image/dropdown1.png'
import dropdown2 from './image/dropdown2.png'

const NavBar = styled.div`
position: fixed;
top: 0;
width: 100%;
z-index: 10;
`
const SmallNavContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 1px solid;
background-color: white;
@media (min-width: 760px) {display: none}
`;
const MediumNavContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 1px solid;
background-color: white;
@media (max-width: 759px), (min-width: 1282px) {
    display: none;
  }
`;
const LargeNavContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 1px solid;
background-color: white;
@media (max-width: 1281px) {display: none}
`;
const NavBarLeft = styled.div`
display: flex;
`
const NavBarRight = styled.div`
display: flex;
`
const NavBarBox = styled.div`
border: 1px solid;
padding: 10px;
`
const Grid2To4 = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
@media (min-width: 1000px) {
  grid-template-columns: repeat(4,1fr);
}
`
const Grid1To2 = styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
place-items:center;
width: 100%;
@media (min-width: 800px) {
  grid-template-columns: repeat(2,1fr);
}
`
const Grid2To3To5 = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
@media (max-width:760px) {
  grid-template-columns: repeat(2,1fr);
}
@media (min-width: 1200px) {
  grid-template-columns: repeat(5,1fr);
}
`
const HideBox = styled.div`
@media (min-width: 900px) {display:flex}
`
const Text = styled.div`
font-size: clamp(20px, 3vw, 34px);
`
const Triangle = styled.span`
  position: absolute;
  top: 7px;
  ${props => props.direction ?
    `` : `
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid black;
  `}

`

function App() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  const click1 = () => {
    setShowDetails1(!showDetails1)
  }
  const click2 = () => {
    setShowDetails2(!showDetails2)
  }
  return (
    <>
      <NavBar>
        <SmallNavContent>
          <NavBarLeft>
            <NavBarBox>Dropbox</NavBarBox>
          </NavBarLeft>
          <NavBarRight>
            <NavBarBox>Sign up Log in</NavBarBox>
            <NavBarBox>Choose</NavBarBox>
          </NavBarRight>
        </SmallNavContent>
        <MediumNavContent>
          <NavBarLeft>
            <NavBarBox>Dropbox</NavBarBox>
          </NavBarLeft>
          <NavBarRight>
            <NavBarBox>Sign up Log in Start using</NavBarBox>
            <NavBarBox>Choose</NavBarBox>
          </NavBarRight>
        </MediumNavContent>
        <LargeNavContent>
          <NavBarLeft>
            <NavBarBox>Dropbox Why choose Dropbox product solution pricing</NavBarBox>
          </NavBarLeft>
          <NavBarRight>
            <NavBarBox>Sign up Log in Start using</NavBarBox>
            <NavBarBox>Choose</NavBarBox>
          </NavBarRight>
        </LargeNavContent>
      </NavBar>
      <Text style={{ textAlign: 'center', paddingTop: '50px' }}>
        Join over 700 million registered users who trust Dropbox
      </Text>
      <div style={{ textAlign: 'center' }}>
        <img src={dropboxOverview} alt={``} width='80%' style={{ maxWidth: '800px' }} />
      </div>
      <Text style={{ textAlign: 'center' }}>A suite of products to help you achieve more</Text>
      <Grid2To4>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
      </Grid2To4>
      <Text style={{ textAlign: 'center' }}>What else can Dropbox help you with?</Text>
      <div style={{ fontSize: '10px' }}>
        <HideBox>
          <div onClick={click1} style={{ fontSize: '1.8em', position: 'relative' }}>Get 2 GB of cloud storage for free with Dropbox Basic <Triangle direction={showDetails1} /></div>
          {showDetails1 && <div style={{ fontSize: '1.5em' }}>
            <p style={{ maxWidth: '60%' }}>You can save and access your files on any device and share them with anyone.
              See what Dropbox can do—get a free account with no limits!</p>
            <div><img src={dropdown1} alt={``} style={{ maxWidth: '60%' }} /></div>
          </div>}
        </HideBox>
        <HideBox>
          <div onClick={click2} style={{ fontSize: '1.8em', position: 'relative' }} >Dropbox Plus has plenty of space for all your file content<Triangle direction={showDetails2} /></div>
          {showDetails2 && <div style={{ fontSize: '1.5em' }}>
            <p style={{ maxWidth: '60%' }}>Protect your photos, personal documents, work files and more.
              2,000 GB of space allows you to store all the content you want to
              keep—while providing some convenient tools to help you stay organized.</p>
            <div><img src={dropdown2} alt={``} style={{ maxWidth: '60%' }} /></div>
          </div>}
        </HideBox>
      </div>
      <Text style={{ textAlign: 'center' }}>How will you use Dropbox?</Text>
      <Grid1To2>
        <img src={useDropbox} alt={``} width='100%' />
        <img src={useDropbox} alt={``} width='100%' />
      </Grid1To2>
      <Grid2To3To5>
        <div>dropbox</div>
        <div>product</div>
        <div>support</div>
        <div>community</div>
        <div>company</div>
      </Grid2To3To5>
    </>
  );
}

export default App;