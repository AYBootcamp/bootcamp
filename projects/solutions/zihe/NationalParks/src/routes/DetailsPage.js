import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FetchImg from '../components/FetchImage';
import { setParkDetails } from '../redux/parkSlice';

export default function DetailPage() {
  const clickParkName = useSelector((state) => state.park.clickParkName);
  const dispatch = useDispatch();
  const parkDetail = useSelector((state) => state.park.parkDetails);
  const data = useSelector((state) => state.park.data);

  useEffect(() => {
    const newParkInfo = () => {
      const parkInformation = data.find((p) => p.fullName === clickParkName);
      dispatch(setParkDetails(parkInformation));
    };
    newParkInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          state: {parkDetail.states}; city: {parkDetail.city}
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
        <h3>Contact</h3>
        <div style={{ display: 'flex' }}>
          <span>
            {parkDetail.phones.map((item, index) => (
              <div>{item.type}: </div>
            ))}
          </span>
          <span>
            {parkDetail.phones.map((item, index) => (
              <div>{item.phoneNumber}</div>
            ))}
          </span>
        </div>
        <p>
          Email:{' '}
          {parkDetail.emails.map((item, index) => (
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
