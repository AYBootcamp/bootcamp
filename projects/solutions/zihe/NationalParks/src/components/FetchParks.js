import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setParkListNames,
  setParkListPics,
  setClickParkName,
  setPages,
  setUrl,
  setData,
  setNumbers,
  setDetails,
  setIsLoading,
  setSearchAllNames,
} from '../redux/parkSlice';
import { URL, LIMIT } from '../constants';
import styled from 'styled-components';
import Loader from '../components/spinner';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Styledli = styled.li`
  list-style: none;
  margin: 10px;
  padding: 5px;
  width: 250px;
  height: 200px;
  overflow: hidden;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledListLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
const Pages = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const StyledSpinner = styled.div`
display:flex;
height: 100vh;
justify-content: center;
align-items: center;
`

export default function FetchParks() {
  const { parkListNames, parkListPics, pages, numbers, url, data, isLoading } = useSelector((state) => state.park);
  const pageNumbers = Math.ceil(numbers / LIMIT);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(setIsLoading(true));
    dispatch(setPages(value - 1));
    dispatch(setUrl());
  }

  useEffect(() => {
    const parksList = async () => {
      const urlAll = `${URL}&limit=${numbers}`;
      const parkNames = await (await fetch(url)).json();
      const allNames = await (await fetch(urlAll)).json();
      let nameArray = [];
      let picArray = [];
      let namesArray = [];
      for (let i = 0; i < parkNames.data.length; i++) {
        nameArray.push(parkNames.data[i].fullName);
        picArray.push(parkNames.data[i].images[0].url);
      }
      for (let i = 0; i < allNames.data.length; i++) {
        namesArray.push(allNames.data[i].fullName);
      };
      dispatch(setNumbers(parkNames.total));
      dispatch(setParkListNames(nameArray));
      dispatch(setParkListPics(picArray));
      dispatch(setData(parkNames.data));
      dispatch(setIsLoading(false));
      dispatch(setSearchAllNames(namesArray));
    };
    parksList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  if (isLoading) { return (<StyledSpinner><Loader /></StyledSpinner>) }

  return (
    <div>
      <div>
        <StyledUl>
          {parkListNames.map((item, index) => (
            <Styledli>
              <StyledListLink
                key={`lists-${index}`}
                to={`${data[index].id}`}
                onClick={() => {
                  dispatch(setClickParkName(data[index].id));
                  dispatch(setDetails(data[index]));
                }}
              >
                {item}
                <StyledImg src={parkListPics[index]} alt={item} />
              </StyledListLink>
            </Styledli>
          ))}
        </StyledUl>
      </div>
      <Pages>
        <Stack spacing={2}>
          <Pagination count={pageNumbers} page={pages + 1} onChange={handleChange} />
        </Stack>
      </Pages>
    </div>
  );
}