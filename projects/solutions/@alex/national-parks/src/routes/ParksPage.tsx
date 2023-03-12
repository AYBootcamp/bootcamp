import { Container, Pagination } from '@mui/material'
import { useEffect } from 'react'
import styled from 'styled-components'

import ParkGridView, { DISPLAY_COUNT } from '../components/ParkGridView'
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { fetchParks, isDataLoading } from '../redux/parks'
import FetchStatus from '../types/FetchStatus'

const CenteredPagination = styled(Pagination)`
    width: 100%;
    margin-top: 20px;
    & > ul {
        justify-content: center;
    }
`

const ParksPage = () => {
    const isLoading = useAppSelector((state) => isDataLoading(state))
    const fetchStatus = useAppSelector((state) => state.parks.fetchStatus)
    const pagination = useAppSelector((state) => state.parks.pagination)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (fetchStatus === FetchStatus.Initial) {
            dispatch(fetchParks())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return <Spinner />
    }

    const count = Math.ceil(pagination.total / DISPLAY_COUNT)
    return (
        <Container sx={{ margin: '20px' }}>
            <ParkGridView />
            <CenteredPagination count={count} shape="rounded" size="large" />
        </Container>
    )
}

export default ParksPage
