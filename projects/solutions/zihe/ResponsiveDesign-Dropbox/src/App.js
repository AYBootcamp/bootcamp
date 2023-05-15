import React, { useState } from 'react';
import styled from "styled-components"
import dropboxOverview from './image/section1.png'
import dropboxProducts from './image/section2.png'
import useDropbox from './image/section3.png'
import dropdown1 from './image/dropdown1.png'
import dropdown2 from './image/dropdown2.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material'

const NavBar = styled.div`
position: fixed;
top: 0;
width: 100%;
z-index: 10;
`
const LargeNavContent = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 1px solid;
background-color: white;
`;
const MediumHide = styled.div`
@media (max-width: 1281px) {display: none}
`
const SmallHide = styled.div`
@media (max-width: 759px) {display: none}
`
const NavBarLeft = styled.div`
display: flex;
`
const NavBarRight = styled.div`
display: flex;
`
const NavBarBox = styled.div`
border: 1px solid;
padding: 10px;
display: flex;
div {margin: 5px}
`
const ProductsList = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
@media (min-width: 1000px) {
  grid-template-columns: repeat(4,1fr);
}
`
const UseDropbox = styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
place-items:center;
width: 100%;
@media (min-width: 800px) {
  grid-template-columns: repeat(2,1fr);
}
`
const Bottom = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
@media (max-width:760px) {
  grid-template-columns: repeat(2,1fr);
}
@media (min-width: 1200px) {
  grid-template-columns: repeat(5,1fr);
}
`
const Text = styled.div`
font-size: clamp(20px, 3vw, 34px);
`

function App() {
  const theme = useTheme()
  const accordionMode = useMediaQuery(theme.breakpoints.down('sm'))
  const [displayImage, setDisplayImage] = useState(dropdown1)

  return (
    <>
      <NavBar>
        <LargeNavContent>
          <NavBarLeft>
            <NavBarBox>
              <div>Dropbox</div>
              <MediumHide>Why choose Dropbox</MediumHide>
              <MediumHide>Product</MediumHide>
              <MediumHide>Solution</MediumHide>
              <MediumHide>Pricing</MediumHide>
            </NavBarBox>
          </NavBarLeft>
          <NavBarRight>
            <NavBarBox>
              <div>Sign up</div>
              <div>Log in</div>
              <SmallHide>Start using</SmallHide>
            </NavBarBox>
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
      <ProductsList>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
        <div><img src={dropboxProducts} alt={``} style={{ maxWidth: '100%' }} /></div>
      </ProductsList>
      <Text style={{ textAlign: 'center' }}>What else can Dropbox help you with?</Text>
      <div style={{ display: 'flex' }}>
        <div style={{ maxWidth: '450px' }}>
          <Accordion onClick={() => setDisplayImage(dropdown1)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Get 2GB of cloud storage for free with Dropbox Basic
            </AccordionSummary>
            <AccordionDetails>
              <span>
                Save and access your files from any device, and
                share them with anyone. Discover what Dropbox
                can do for you- get a free account, no strings
                attached!
              </span>
              <img
                src={dropdown1}
                alt="dropbox-section-img"
                style={{
                  display: accordionMode ? 'block' : 'none',
                  width: '400px',
                }}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion onClick={() => setDisplayImage(dropdown2)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Dropbox Plus has room for all your content with
              space to spare
            </AccordionSummary>
            <AccordionDetails>
              <span>
                Safeguard your photos, personal docs, work
                files, and much more. Save everything with 2,000
                GB of space—and get some handy tools to help you
                stay organized.
              </span>
              <img
                src={dropdown2}
                alt="dropbox-section-img"
                style={{
                  display: accordionMode ? 'block' : 'none',
                  width: '400px',
                }}
              />
            </AccordionDetails>
          </Accordion>
        </div>
        {!accordionMode && (
          <Container>
            <img src={displayImage} alt="dropbox-section-img" style={{ width: '100%', maxWidth: '600px' }} />
          </Container>
        )}
      </div>
      <Text style={{ textAlign: 'center' }}>How will you use Dropbox?</Text>
      <UseDropbox>
        <img src={useDropbox} alt={``} width='100%' />
        <img src={useDropbox} alt={``} width='100%' />
      </UseDropbox>
      <Bottom>
        <div>dropbox</div>
        <div>product</div>
        <div>support</div>
        <div>community</div>
        <div>company</div>
      </Bottom>
    </>
  );
}

export default App;