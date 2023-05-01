import styled from '@emotion/styled'
import { useMediaQuery, useTheme } from '@mui/material'

import PlaygroundSection from '../../components/PlaygroundSection'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Box = styled.div`
    border: 1px solid red;
    padding: 2px;
    margin: 2px;
    width: 200px;
`

const MediaQuery = () => {
    const theme = useTheme()
    const { height, width } = useWindowDimensions()
    const atLeastSM = useMediaQuery(theme.breakpoints.up('sm')) // up, down, between
    const atLeast800px = useMediaQuery('(min-width:800px)')
    const betweenMDandLG = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const atMost1200px = useMediaQuery('(max-width:1200px)')
    return (
        <PlaygroundSection
            title="Media Query"
            guide={{
                label: 'Media Query Guide',
                url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries',
            }}
        >
            <div>
                <h3>Media Query and Results</h3>
                <h4>
                    Current window size: {width} x {height}
                </h4>
                <ul>
                    <li>
                        Page has at least -sm- size defined in Material:{' '}
                        <b> {JSON.stringify(atLeastSM)}</b>
                    </li>

                    <li>
                        Page is between -md- and -lg- size defined in Material:{' '}
                        <b> {JSON.stringify(betweenMDandLG)}</b>
                    </li>
                    <li>
                        Page has at least 800 px:{' '}
                        <b>{JSON.stringify(atLeast800px)}</b>
                    </li>
                    <li>
                        Page has at most 1200 px:{' '}
                        <b>{JSON.stringify(atMost1200px)}</b>
                    </li>
                </ul>
                <h3>Conditional Styles</h3>
                <div
                    style={{
                        display: 'flex',
                        border: '1px solid black',
                        margin: '5px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: atLeast800px ? 'row' : 'column',
                    }}
                >
                    <Box>BOX 1</Box>
                    <Box>BOX 2</Box>
                    <Box>BOX 3</Box>
                    <Box>BOX 4</Box>
                </div>

                <h3>Conditional Content</h3>
                <div
                    style={{
                        display: 'flex',
                        border: '1px solid black',
                        margin: '5px',
                        justifyContent: atLeast800px
                            ? 'space-between'
                            : 'center',
                        alignItems: 'center',
                    }}
                >
                    {atLeast800px ? (
                        <>
                            <Box>BOX 1</Box>
                            <Box>BOX 2</Box>
                            <Box>BOX 3</Box>
                            <Box>BOX 4</Box>
                        </>
                    ) : (
                        <Box>Box 1..4</Box>
                    )}
                </div>
            </div>
        </PlaygroundSection>
    )
}

export default MediaQuery
