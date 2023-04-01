import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    setClickParkName,
    setPages,
    setUrl,
    setData,
    setDetails,
    setIsLoading,
} from '../redux/parkSlice';
import { LIMIT } from '../constants';
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
    const { pages, numbers, url, data, isLoading } = useSelector((state) => state.park);
    const pageNumbers = Math.ceil(numbers / LIMIT);
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        dispatch(setIsLoading(true));
        dispatch(setPages(value - 1));
        dispatch(setUrl());
    }

    useEffect(() => {
        const parksList = async () => {
            const newUrl = `${url}&limit=${LIMIT}`
            const parkNames = await (await fetch(newUrl)).json();
            dispatch(setData(parkNames.data));
            dispatch(setIsLoading(false));
        };
        parksList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    if (isLoading) { return (<StyledSpinner><Loader /></StyledSpinner>) }

    return (
        <div>
            <div>
                <StyledUl>
                    {data.map((item, index) => (
                        <Styledli>
                            <StyledListLink
                                key={`lists-${index}`}
                                to={`${item.id}`}
                                onClick={() => {
                                    dispatch(setClickParkName(item.id));
                                    dispatch(setDetails(item));
                                }}
                            >
                                {item.fullName}
                                <StyledImg src={item.images[0].url} alt={item.fullName} />
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