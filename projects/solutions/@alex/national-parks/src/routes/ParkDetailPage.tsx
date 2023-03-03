import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'

import ParkDetails from '../components/ParkDetails'

const ParkDetailPage = () => {
    const { parkId } = useParams()
    if (!parkId) {
        return <div> error </div>
    }
    return (
        <Container>
            <ParkDetails parkId={parkId} />
        </Container>
    )
}

export default ParkDetailPage
