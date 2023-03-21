import { Grid } from '@mui/material'

import { useAppSelector } from '../hooks/reduxHooks'
import ParkThumbnail from './ParkThumbnail'

const ROW_COUNT = 5
const COL_COUNT = 5
export const DISPLAY_COUNT = ROW_COUNT * COL_COUNT

const ParkGridView = () => {
    /* ===========================
     Hooks
     ============================= */
    const pagination = useAppSelector((state) => state.parks.pagination)

    /* ===========================
     Handlers
     ============================= */
    const renderParks = () => {
        return Array.from(Array(ROW_COUNT).keys()).map((row) => (
            <Grid key={`park-grid-row-${row}`} container item spacing={2}>
                {renderParkRow(row)}
            </Grid>
        ))
    }

    const renderParkRow = (rowNum: number) => {
        const parks = pagination.pageToData[pagination.current / DISPLAY_COUNT]
        // Guard against bad data
        if (!parks || parks.length === 0) {
            return <div>something went wrong...</div>
        }

        return Array.from(Array(COL_COUNT).keys()).map((col) => {
            const park = parks[5 * rowNum + col]

            if (!park) {
                return null
            }

            return (
                <Grid key={`park-grid-row-${rowNum}-col-${col}`} item xs>
                    <ParkThumbnail park={park} parkId={park?.id} />
                </Grid>
            )
        })
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
