import styled from '@emotion/styled'
import { Grid } from '@mui/material'

import PlaygroundSection from '../../components/PlaygroundSection'

const Box = styled.div`
    border: 1px solid red;
    padding: 2px;
    margin: 2px;
    width: 150px;
    height: 150px;
`

const MaterialUI = () => {
    return (
        <PlaygroundSection
            title="Material UI"
            guide={{
                label: 'Material UI Docs',
                url: 'https://mui.com/material-ui/guides/responsive-ui/',
            }}
        >
            <h3>Grid</h3>
            <Grid container>
                <Grid item>
                    <Box> Grid 1</Box>
                </Grid>
                <Grid item>
                    <Box>Grid 2</Box>
                </Grid>
                <Grid item>
                    <Box> Grid 3</Box>
                </Grid>
                <Grid item>
                    <Grid item>
                        <Box> Grid 4-1</Box>
                    </Grid>
                    <Grid item>
                        <Box> Grid 4-2</Box>
                    </Grid>
                    <Grid item>
                        <Box> Grid 4-3</Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Box> Grid 5</Box>
                </Grid>
                <Grid item>
                    <Box> Grid 6</Box>
                </Grid>
            </Grid>
        </PlaygroundSection>
    )
}

export default MaterialUI
