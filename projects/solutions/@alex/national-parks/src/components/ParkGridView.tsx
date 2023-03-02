import { Grid } from '@mui/material'

import { useAppSelector } from '../hooks/reduxHooks'
import ParkThumbnail from './ParkThumbnail'

const ParkGridView = () => {
    /* ===========================
     Hooks
     ============================= */
    const parkData = useAppSelector((state) => state.parks.data)

    /* ===========================
     Handlers
     ============================= */
    const renderParks = () => {
        return Array.from(Array(5).keys()).map((row) => (
            <Grid key={`park-grid-row-${row}`} container item spacing={2}>
                {renderParkRow(row)}
            </Grid>
        ))
    }

    const renderParkRow = (rowNum: number) => {
        const parks = Object.values(parkData)

        return Array.from(Array(5).keys()).map((col) => (
            <Grid key={`park-grid-row-${rowNum}-col-${col}`} item xs>
                <ParkThumbnail park={parks[1 * rowNum + col]} />
            </Grid>
        ))
    }

    /* ===========================
     JSX - 5x5 box grid
     ============================= */
    return (
        <Grid
            container
            justifyContent={'center'}
            alignItems="center"
            spacing={2}
        >
            {renderParks()}
        </Grid>
    )
}

export default ParkGridView