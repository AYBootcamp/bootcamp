import { Container, Pagination } from '@mui/material'
import styled from 'styled-components'

import ParkGridView from '../components/ParkGridView'

const CenteredPagination = styled(Pagination)`
    width: 100%;
    margin-top: 20px;
    & > ul {
        justify-content: center;
    }
`

const ParksPage = () => {
    return (
        <Container sx={{ margin: '20px' }}>
            <ParkGridView />
            <CenteredPagination count={10} shape="rounded" size="large" />
        </Container>
    )
}

export default ParksPage
