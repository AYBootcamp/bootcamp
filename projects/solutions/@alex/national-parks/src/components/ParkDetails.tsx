import { Box, Link, Typography } from '@mui/material'
import React from 'react'

import formatPhone from '../helpers/formatPhone'
import { useAppSelector } from '../hooks/reduxHooks'
import { getParkByIdSelector } from '../redux/parks'
import ParkImageList from './ParkImageList'

const ParkDetails: React.FC<{ parkId: string }> = ({ parkId }) => {
    /* ===========================
    Hooks
    ============================= */
    const park = useAppSelector((state) => getParkByIdSelector(state, parkId))

    /* ===========================
     JSX
     ============================= */

    return (
        <Box
            sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}
        >
            <Typography variant="h3">{park.fullName}</Typography>
            <Typography variant="h5">
                Description:
                <Typography variant="body1">{park.description}</Typography>
            </Typography>
            <Link href={park.url} target="_blank" sx={{ marginRight: 'auto' }}>
                {park.url}
            </Link>
            <Typography variant="h5">
                State:
                <Typography variant="body1"> {park.states}</Typography>
            </Typography>
            <Typography variant="h5">
                Contacts - Phone:
                <Typography variant="body1">
                    {park.contacts.phoneNumbers.map((phone, i) => (
                        <span key={`phone-${i}`} style={{ display: 'block' }}>
                            {formatPhone(phone.phoneNumber)} {phone.description}
                        </span>
                    ))}
                </Typography>
            </Typography>
            <Typography variant="h5">
                Contacts - Email:
                <Typography variant="body1">
                    {park.contacts.emailAddresses.map(
                        (email) => email.emailAddress
                    )}
                </Typography>
            </Typography>
            <Typography variant="h5">
                Entrance Fee
                <Typography variant="body1">
                    {park.entranceFees.map((fee, i) => (
                        <span
                            key={`park-fee-${i}`}
                            style={{ display: 'block' }}
                        >
                            {fee.title} {fee.cost}
                        </span>
                    ))}
                </Typography>
            </Typography>
            <Typography variant="h5">
                Address
                <Typography variant="body1">
                    <span style={{ display: 'block' }}>
                        {park.addresses[0].line1} {park.addresses[0].line2}{' '}
                        {park.addresses[0].line3}
                    </span>
                    <span style={{ display: 'block' }}>
                        {park.addresses[0].city} {park.addresses[0].stateCode}
                    </span>
                    <span style={{ display: 'block' }}>
                        {park.addresses[0].postalCode}
                    </span>
                </Typography>
            </Typography>
            <Typography variant="h5">Images</Typography>
            <ParkImageList images={park.images} />
        </Box>
    )
}

export default ParkDetails
