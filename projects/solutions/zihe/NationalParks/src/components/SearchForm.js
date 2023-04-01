import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm, setSearchResults, setClickParkName, setDetails, setIsLoading } from '../redux/parkSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const SearchLi = styled.li`
list-style-type: none;
`
const SearchLink = styled(Link)`
text-decoration: none;
color:black;
display: block;
&:hover {
    font-weight: 800;
}
`
const Search = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`
export default function SearchForm() {
    const dispatch = useDispatch();
    const { searchTerm, searchResults, url, allParks } = useSelector((state) => state.park);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm === '') return;
        else {
            const results = allParks.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()));
            dispatch(setSearchResults(results));
        }
    };

    const clickLink = (id) => {
        const searchOneName = async () => {
            let urlOnePark = `${url}&q=${encodeURIComponent(id)}`
            const searchOnePark = await (await fetch(urlOnePark)).json();
            if (searchOnePark.data.length > 0) {
                const park = searchOnePark.data.find(p => p.id === id);
                dispatch(setDetails(park))
            }
        };
        searchOneName();
        dispatch(setIsLoading(false));
    }

    return (
        <div>
            <Search>
                <input type='text' value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))} />
                <Button onClick={handleSubmit} style={{ color: 'black' }}>Search</Button>
            </Search>
            <ul>
                {searchResults.map((results) =>
                (<SearchLi>
                    <SearchLink to={`${results.id}`}
                        onClick={() => {
                            dispatch(setIsLoading(true))
                            dispatch(setClickParkName(results.id))
                            clickLink(results.id);
                        }}
                    >{results.name}</SearchLink></SearchLi>))}
            </ul>
        </div>
    )
}