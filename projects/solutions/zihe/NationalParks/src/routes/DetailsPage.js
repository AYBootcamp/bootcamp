import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FetchImg from '../components/FetchImage';
import OperatingHours from '../components/OperatingHours';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import ParkIcon from '@mui/icons-material/Park';
import ShortTextIcon from '@mui/icons-material/ShortText';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HikingIcon from '@mui/icons-material/Hiking';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const StyledTopics = styled.span`
border-radius: 5px;
margin:5px;
padding:2px;
background-color:white;
`

export default function DetailPage() {
  const parkDetail = useSelector((state) => state.park.details);

  return (
    <div>
      <div>
        <h2>
          {parkDetail.fullName}<ParkIcon />
        </h2>
        <h3>Brief description<ShortTextIcon /></h3>
        <p>{parkDetail.description}</p>
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {parkDetail.topics.map((item, index) => (
              <StyledTopics>{item.name}</StyledTopics>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Stack direction='row' spacing={1}>
            <Chip label='Find more information here' color='success' variant='outlined' />
          </Stack>
          <Link to={parkDetail.url} style={{ textDecoration: 'none', color: 'black' }}>{parkDetail.url}</Link><LinkIcon />
        </div>
        <div>
          <FetchImg />
        </div>
        <h3>Location<LocationOnIcon /></h3>
        <Stack direction='row' spacing={1} style={{ display: 'flex', alignItems: 'center' }}>
          <Chip label='State' color='success' variant='outlined' />
          <span>{parkDetail.states}</span>
          <Chip label='City' color='success' variant='outlined' />
          <span>{parkDetail.addresses[0].city}</span>
        </Stack>
        <Stack direction='row' spacing={1} style={{ display: 'flex', alignItems: 'center' }}>
          <Chip label='Direction' color='success' variant='outlined' />
          <span>{parkDetail.directionsInfo}</span>
        </Stack>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Stack direction='row' spacing={1}>
            <Chip label='Find us here' color='success' variant='outlined' />
          </Stack>
          <Link to={parkDetail.directionsUrl} style={{ textDecoration: 'none', color: 'black' }}>{parkDetail.directionsUrl}</Link><LinkIcon />
        </div>
        <h3>What you can do here<HikingIcon /></h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', maxHeight: '400px', overflowY: 'auto' }}
            component="nav"
            aria-label="mailbox folders">
            {parkDetail.activities.map((item) => (
              <div>
                <Divider />
                <ListItem>
                  <ListItemText primary={item.name} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
        <h3>Entrance Fees<AttachMoneyIcon /></h3>
        <div>
          {parkDetail.entranceFees.map((item, index) => (
            <div>
              <Stack direction='row' spacing={1}>
                <Chip label={item.title} color='success' variant='outlined' />
              </Stack>
              <strong>{item.cost}$</strong> {item.description}
            </div>
          ))}
        </div>
        <div>
          {parkDetail.entrancePasses.map((item, index) => (
            <div>
              <Stack direction='row' spacing={1}>
                <Chip label={item.title} color='success' variant='outlined' />
              </Stack>
              <strong>{item.cost}$</strong> {item.description}
            </div>
          ))}
        </div>
        <h3>Weather Information<WbSunnyIcon /></h3>
        <p>{parkDetail.weatherInfo}</p>
        <h3>Operating Hours<AccessTimeIcon /></h3>
        <OperatingHours />
        <h3>Contact<PhoneIcon /></h3>
        <Stack spacing='1'>
          {parkDetail.contacts.phoneNumbers.map((item, index) => (<div>
            <Chip label={item.type} color='success' variant='outlined' />
            <span>{item.phoneNumber}</span></div>
          ))}
        </Stack>
        <div>
          <Stack direction='row' spacing={1} style={{ display: 'flex', alignItems: 'center' }} >
            <Chip label='Email' color='success' variant='outlined' />
            {parkDetail.contacts.emailAddresses.map((item, index) => (
              <span>{item.emailAddress}</span>
            ))}
          </Stack>
        </div>
        <Stack spacing='1' >
          {parkDetail.addresses.map((item, index) => (<div>
            <Chip label={item.type} color='success' variant='outlined' />
            <span>{item.line1} {item.line2} {item.line3} Postal Code:{item.postalCode}</span></div>
          ))}
        </Stack>
      </div>
    </div>
  );
}