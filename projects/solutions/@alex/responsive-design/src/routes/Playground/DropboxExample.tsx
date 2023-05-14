// section: What else can Dropbox help you do?
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import { useState } from 'react'

import DropboxImgOne from '../../assets/1.png'
import DropboxImgTwo from '../../assets/2.png'
import DropboxImgThree from '../../assets/3.png'
import PlaygroundSection from '../../components/PlaygroundSection'

const DropboxExample = () => {
    const theme = useTheme()
    // if screen is smaller than sm, use accordion otherwise dual display mode
    const accordionMode = useMediaQuery(theme.breakpoints.down('sm'))
    const [displayImage, setDisplayImage] = useState(DropboxImgOne)
    return (
        <PlaygroundSection title="Dropbox Example">
            <div style={{ display: 'flex' }}>
                {/* Toggles */}
                <div style={{ maxWidth: '450px' }}>
                    <Accordion onClick={() => setDisplayImage(DropboxImgOne)}>
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
                                src={DropboxImgOne}
                                alt="dropbox-section-img"
                                style={{
                                    display: accordionMode ? 'block' : 'none',
                                    width: '400px',
                                }}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion onClick={() => setDisplayImage(DropboxImgTwo)}>
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
                                src={DropboxImgTwo}
                                alt="dropbox-section-img"
                                style={{
                                    display: accordionMode ? 'block' : 'none',
                                    width: '400px',
                                }}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion onClick={() => setDisplayImage(DropboxImgThree)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Dropbox Family is a place for everyone with space
                            for everything
                        </AccordionSummary>
                        <AccordionDetails>
                            <span>
                                Share 2,000 GB of storage between 6 people. Each
                                family plan member gets their own private
                                Dropbox account for less than the price of two
                                Plus plans.
                            </span>
                            <img
                                src={DropboxImgThree}
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
                        {/* Dual display mode */}
                        <img src={displayImage} alt="dropbox-section-img" />
                    </Container>
                )}
            </div>
        </PlaygroundSection>
    )
}

export default DropboxExample
