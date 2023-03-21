import React, { useEffect, useState } from 'react';
import { URL } from '../constants';
import { useDispatch } from 'react-redux';
import { setNumbers } from '../redux/parkSlice';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

const parkIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  iconSize: [10, 16],
  iconAnchor: [5, 16],
  popupAnchor: [0, -12],
  shadowSize: [20, 16],
});

const ParkMap = ({ parks }) => {
  const defaultCenter = [39.8283, -98.5795];
  const defaultZoom = 4;

  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {parks.map((park) => (
        <Marker
          key={park.id}
          position={[park.latitude, park.longitude]}
          icon={parkIcon}
          title={park.name}
        />
      ))}
    </MapContainer>
  );
};

export default function HomePage() {
  const dispatch = useDispatch();
  const [loc, setLoc] = useState([]);

  useEffect(() => {
    const parksInfo = async () => {
      const url = `${URL}&limit=500`;
      const parkInfos = await (await fetch(url)).json();
      dispatch(setNumbers(parkInfos.data.length))
      const locArray = parkInfos.data.map((item) => ({
        id: item.id,
        fullName: item.fullName,
        latitude: item.latitude,
        longitude: item.longitude,
      }))
      setLoc(locArray);
    }
    parksInfo();
  }, [])

  return (
    <div>
      Here you will get information about all the national parks in the United
      States.
      <div style={{ height: '100vh', width: '100vw' }}><ParkMap parks={loc} /></div>
    </div>
  );
}