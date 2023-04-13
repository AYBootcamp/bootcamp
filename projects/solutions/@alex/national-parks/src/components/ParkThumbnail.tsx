import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import { PATH } from '../App'
import { Park } from '../types/Park'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '200px',
    ':hover': {
        cursor: 'pointer',
        boxShadow: theme.shadows[7],
    },
}))

interface ParkThumbnailProps {
    park: Park
    parkId: Park['id']
}

const ParkThumbnail: React.FC<ParkThumbnailProps> = ({ park, parkId }) => {
    /* ===========================
     Hooks
     ============================= */
    const navigate = useNavigate()

    /* ===========================
     Handlers
     ============================= */
    const handleClick = () => {
        navigate(PATH.PARKS + `/${parkId}`)
    }
    const imageOnError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        event.currentTarget.src =
            'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/images/image-failed-to-load-placeholder'
    }

    /* ===========================
     JSX - Summary of the given park
     ============================= */
    return (
        <Item onClick={handleClick}>
            <div
                style={{
                    display: 'flex',
                    background: 'rgb(255, 255,255,0.5)',
                    justifyContent: 'center',
                    borderRadius: '25px',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <span
                    style={{
                        color: '#000',
                        fontWeight: 'bold',
                    }}
                >
                    {park.fullName}
                </span>
                <img
                    src={park.images[0].url}
                    alt={park.fullName}
                    onError={imageOnError}
                    width={150}
                />
            </div>
        </Item>
    )
}

export default ParkThumbnail
