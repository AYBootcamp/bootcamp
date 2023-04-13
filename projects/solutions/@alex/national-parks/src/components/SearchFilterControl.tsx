import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'

import { useAppSelector } from '../hooks/reduxHooks'
import FilterByState from './FilterByState'

const SearchFilterControl = () => {
    const totalCount = useAppSelector((state) => state.parks.pagination.total)

    /* ===========================
     JSX
     ============================= */
    return (
        <Accordion
            sx={(theme) => ({
                margin: '0 0 20px 0',
                backgroundColor: theme.palette.background.paper,
            })}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="search-content"
                id="search-header"
            >
                <Typography fontWeight={'bold'}>
                    Search & Filter ({totalCount})
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Filter by state: </Typography>
                <FilterByState />
            </AccordionDetails>
        </Accordion>
    )
}

export default SearchFilterControl
