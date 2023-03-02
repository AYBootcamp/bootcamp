import { Backdrop, Card, Container, Tooltip } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import { useAppSelector } from '../hooks/reduxHooks'
import ParkImages from './ParkImages'

const ParkDetails: React.FC<{ parkId: string }> = ({ parkId }) => {
    const parks = useAppSelector((state) => state.parks.data)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            park details
            <ParkImages images={parks[parkId].images} />
        </div>
    )
}

export default ParkDetails
