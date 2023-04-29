import { useMediaQuery, useTheme } from '@mui/material'

import PlaygroundSection from '../../components/PlaygroundSection'
import useWindowDimensions from '../../hooks/useWindowDimensions'

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
            </div>
        </PlaygroundSection>
    )
}

export default MediaQuery
