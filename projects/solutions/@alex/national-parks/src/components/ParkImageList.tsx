import { Backdrop, Container, Typography } from '@mui/material'
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

const ParkImageList: React.FC<{ images: Image[] }> = ({ images }) => {
    /* ===========================
     State
     ============================= */
    const [open, setOpen] = React.useState(false)
    const [img, setImg] = React.useState<Image | null>(null)

    /* ===========================
     Handlers
     ============================= */
    const handleClose = () => {
        setOpen(false)
        setImg(null)
    }
    const handleOpen = (img: Image) => {
        setOpen(!open)
        setImg(img)
    }

    /* ===========================
     JSX
     ============================= */
    return (
        <ImagesList>
            {images.map((img, index) => (
                <ImageContainer key={`${img.title}-${index}`}>
                    <ImageTitle>{img.title} </ImageTitle>

                    <HoverImg
                        src={img.url}
                        alt={img.altText}
                        onClick={() => handleOpen(img)}
                    />
                </ImageContainer>
            ))}
            <Backdrop
                sx={{
                    color: (theme) => theme.palette.getContrastText('#656564'),
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: 'rgba(101, 100, 101, 0.9)',
                }}
                open={open}
                onClick={handleClose}
            >
                <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <BackdropImg src={img?.url} alt={img?.altText} />
                    <Typography variant="h6">{img?.caption}</Typography>
                </Container>
            </Backdrop>
        </ImagesList>
    )
}

export default ParkImageList
