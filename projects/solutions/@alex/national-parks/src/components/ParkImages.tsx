import { Backdrop, Card, Container, Tooltip } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import { Image } from '../types/Park'

const HoverImg = styled.img`
    width: 260px;
    :hover {
        cursor: pointer;
    }
`

const BackdropImg = styled.img`
    max-height: 70vh;
    width: auto;
    height: auto;
`

const ImagesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageTitle = styled.span`
    font-weight: bold;
`

const ParkImages: React.FC<{ images: Image[] }> = ({ images }) => {
    const [open, setOpen] = React.useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <ImagesList>
            {images.map((img, index) => (
                <ImageContainer key={`${img.title}-${index}`}>
                    <ImageTitle>{img.title} </ImageTitle>

                    <HoverImg
                        src={img.url}
                        alt={img.altText}
                        onClick={handleToggle}
                    />
                    <Backdrop
                        sx={{
                            backgroundColor: (theme) => theme.palette.grey[500],
                            opacity: 0.3,
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={open}
                        onClick={handleClose}
                    >
                        <Container
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <BackdropImg
                                src={img.url}
                                alt={img.altText}
                                onClick={handleToggle}
                            />
                            <span>{img.caption}</span>
                        </Container>
                    </Backdrop>
                </ImageContainer>
            ))}
        </ImagesList>
    )
}

export default ParkImages
