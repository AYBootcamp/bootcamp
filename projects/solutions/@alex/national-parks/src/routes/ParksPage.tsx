import { Container, Pagination } from '@mui/material'
import styled from 'styled-components'

import ParkGridView, { DISPLAY_COUNT } from '../components/ParkGridView'
import SearchFilterControl from '../components/SearchFilterControl'
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { changePage, fetchParks, isDataLoading } from '../redux/parks'

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
    const isLoading = useAppSelector((state) => isDataLoading(state))

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
            <SearchFilterControl />
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <ParkGridView />
                    <CenteredPagination
                        count={Math.ceil(pagination.total / DISPLAY_COUNT)}
                        page={Math.ceil(pagination.current / DISPLAY_COUNT)}
                        onChange={handlePaginationChange}
                        shape="rounded"
                        size="large"
                    />
                </>
            )}
        </Container>
    )
}

export default ParksPage
