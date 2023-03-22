import React, { useState } from 'react';
import FetchParks from '../components/FetchParks';
import SearchForm from '../components/SearchForm';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterByState from '../components/FilterByState';
import Button from '@mui/material/Button';
import { URL } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchStates } from '../redux/parkSlice';

export default function ListPage() {
  const [filter, setFilter] = useState(false);
  const { numbers } = useSelector((state) => state.park)
  const dispatch = useDispatch();

  const clickFilter = () => {
    const fetchStates = async () => {
      const urlAll = `${URL}&limit=${numbers}`;
      const allStates = await (await fetch(urlAll)).json();
      const statesArray = allStates.data.map((item) => ({
        id: item.id,
        fullName: item.fullName,
        states: item.states,
        img: item.images[0].url,
      }));
      dispatch(setSearchStates(statesArray))
    };
    fetchStates();
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SearchForm />
        <Button size='small' color='success' style={{ position: 'absolute', right: '0px' }}
          onClick={() => {
            setFilter(!filter);
            clickFilter();
          }}><FilterAltIcon /> Filter by state</Button>
      </div>
      <div>
        {filter && <FilterByState />}
      </div>
      <div>
        {!filter && <FetchParks />}
      </div>
    </div>
  );
}