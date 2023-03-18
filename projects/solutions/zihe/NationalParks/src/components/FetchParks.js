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
} from '../redux/parkSlice';
import { LIMIT } from '../constants';
import styled from 'styled-components';

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
const PagesLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`;

export default function FetchParks() {
  const parkListNames = useSelector((state) => state.park.parkListNames);
  const parkListPics = useSelector((state) => state.park.parkListPics);
  const numbers = useSelector((state) => state.park.numbers);
  const url = useSelector((state) => state.park.url);
  const pageNumbers = Math.ceil(numbers / LIMIT);
  const dispatch = useDispatch();
  const numArray = [];
  for (let i = 1; i <= pageNumbers; i++) {
    numArray.push(i);
  }

  useEffect(() => {
    const parksList = async () => {
      const parkNames = await (await fetch(url)).json();
      let nameArray = [];
      let picArray = [];
      for (let i = 0; i < parkNames.data.length; i++) {
        nameArray.push(parkNames.data[i].fullName);
        picArray.push(parkNames.data[i].images[0].url);
      }
      dispatch(setNumbers(parkNames.total));
      dispatch(setParkListNames(nameArray));
      dispatch(setParkListPics(picArray));
      dispatch(setData(parkNames.data));
    };
    parksList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div>
      <div>
        <StyledUl>
          {parkListNames.map((item, index) => (
            <Styledli>
              <StyledListLink
                key={`lists-${index}`}
                to={'DetailPage'}
                onClick={() => {
                  dispatch(setClickParkName(item));
                }}
              >
                {item}
                <StyledImg src={parkListPics[index]} alt={item} />
              </StyledListLink>
            </Styledli>
          ))}
        </StyledUl>
      </div>
      <div>
        {numArray.map((item, index) => (
          <PagesLink
            key={`pages-${index}`}
            onClick={() => {
              dispatch(setPages(index));
              dispatch(setUrl());
            }}
          >
            {item}
          </PagesLink>
        ))}
      </div>
    </div>
  );
}
