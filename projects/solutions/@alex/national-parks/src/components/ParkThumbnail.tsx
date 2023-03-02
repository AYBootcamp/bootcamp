import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

import { Park } from '../types/Park'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '200px',
}))

const ParkThumbnail: React.FC<{ park: Park }> = ({ park }) => {
    /* ===========================
     JSX
     ============================= */
    return <Item>{park.fullName}</Item>
}

export default ParkThumbnail
