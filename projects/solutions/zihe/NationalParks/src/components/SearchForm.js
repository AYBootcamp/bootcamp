import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { URL } from '../constants'
import { setSearchAllNames, setSearchTerm, setSearchResults, setClickParkName, setDetails } from '../redux/parkSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchLink = styled(Link)`
text-decoration: none;
color:black;
display: block;
&:hover {
    font-weight: 800;
}
`

export default function SearchForm() {
    const dispatch = useDispatch();
    const { numbers, searchTerm, searchResults, searchAllNames } = useSelector((state) => state.park);
    const url = `${URL}&limit=${numbers}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchAllNames = async () => {
            const allNames = await (await fetch(url)).json();
            let nameArray = [];
            for (let i = 0; i < allNames.data.length; i++) {
                nameArray.push(allNames.data[i].fullName);
            };
            dispatch(setSearchAllNames(nameArray));
        };
        fetchAllNames();
        const results = searchAllNames.filter((name) =>
            name.toLowerCase().includes(searchTerm.toLowerCase()));
        dispatch(setSearchResults(results));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))} />
                <button type='submit'>Search</button>
            </form>
            <ul>
                {searchResults.map((results, index) =>
                (<SearchLink
                    key={index}>{results}</SearchLink>))}
            </ul>
        </div>
    )
}