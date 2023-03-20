import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FetchImg from '../components/FetchImage';
import OperatingHours from '../components/OperatingHours';

export default function DetailPage() {
  const parkDetail = useSelector((state) => state.park.details);

  return (
    <div>
      <div>
        <h3>Brief description</h3>
        <p>{parkDetail.description}</p>
        <p>
          Topics:{' '}
          {parkDetail.topics.map((item, index) => (
            <span>{item.name}; </span>
          ))}
        </p>
        <Link to={parkDetail.url}>{parkDetail.url}</Link>
        <div>
          <FetchImg />
        </div>
        <h3>Location</h3>
        <p>
          state: {parkDetail.states}; city: {parkDetail.addresses[0].city}
        </p>
        <p>Direction: {parkDetail.directionsInfo}</p>
        <Link to={parkDetail.directionsUrl}>{parkDetail.directionsUrl}</Link>
        <h3>What you can do here</h3>
        <ul>
          {parkDetail.activities.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <h3>Entrance Fees</h3>
        <div>
          {parkDetail.entranceFees.map((item, index) => (
            <div>
              {item.title}: <br />
              <strong>{item.cost}$</strong> {item.description}
            </div>
          ))}
        </div>
        <div>
          {parkDetail.entrancePasses.map((item, index) => (
            <div>
              {item.title}: <br />
              <strong>{item.cost}$</strong> {item.description}
            </div>
          ))}
        </div>
        <h3>Weather Information</h3>
        <p>{parkDetail.weatherInfo}</p>
        <h3>Operating Hours</h3>
        <OperatingHours />
        <h3>Contact</h3>
        <div style={{ display: 'flex' }}>
          <span>
            {parkDetail.contacts.phoneNumbers.map((item, index) => (
              <div>{item.type}: </div>
            ))}
          </span>
          <span>
            {parkDetail.contacts.phoneNumbers.map((item, index) => (
              <div>{item.phoneNumber}</div>
            ))}
          </span>
        </div>
        <p>
          Email:{' '}
          {parkDetail.contacts.emailAddresses.map((item, index) => (
            <span>{item.emailAddress}</span>
          ))}
        </p>
        <div>
          {parkDetail.addresses.map((item, index) => (
            <div>
              {item.type}: {item.line1} {item.line2} {item.line3}
              <br /> Postal code: {item.postalCode}{' '}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}