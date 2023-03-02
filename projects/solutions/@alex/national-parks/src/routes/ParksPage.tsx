import { Container } from '@mui/material'

import ParkGridView from '../components/ParkGridView'

const ParksPage = () => {
    return (
        <Container sx={{ margin: '20px' }}>
            <ParkGridView />
        </Container>
    )
}

export default ParksPage
