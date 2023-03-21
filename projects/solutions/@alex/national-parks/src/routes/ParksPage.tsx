import { Container, Pagination } from '@mui/material'
import styled from 'styled-components'

import ParkGridView, { DISPLAY_COUNT } from '../components/ParkGridView'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { changePage, fetchParks } from '../redux/parks'

const CenteredPagination = styled(Pagination)`
    width: 100%;
    margin-top: 20px;
    & > ul {
        justify-content: center;
    }
`

const ParksPage = () => {
    /* ===========================
     Hooks
     ============================= */
    const pagination = useAppSelector((state) => state.parks.pagination)
    const dispatch = useAppDispatch()
    /* ===========================
     Handlers
     ============================= */
    const handlePaginationChange = (
        _: React.ChangeEvent<unknown>,
        pageNumber: number
    ) => {
        if (!pagination.pageToData[pageNumber]) {
            dispatch(fetchParks({ pageNumber }))
        }
        dispatch(changePage(pageNumber))
    }

    /* ===========================
     JSX
     ============================= */
    return (
        <Container sx={{ margin: '20px' }}>
            <ParkGridView />
            <CenteredPagination
                count={Math.floor(pagination.total / DISPLAY_COUNT)}
                page={Math.ceil(pagination.current / DISPLAY_COUNT)}
                onChange={handlePaginationChange}
                shape="rounded"
                size="large"
            />
        </Container>
    )
}

export default ParksPage
