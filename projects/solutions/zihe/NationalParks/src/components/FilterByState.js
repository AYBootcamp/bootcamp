import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { setClickParkName, setDetails, setIsLoading } from '../redux/parkSlice';

const StyledLink = styled(Link)`
list-style-type: none;
text-decoration: none;
color:black;
width: 130px;
height:150px;
margin:5px;
font-size: 1px;
overflow:hidden;
:hover {cursor:pointer;font-weight:600}
`
const StyledImg = styled.img`
  width: 100%;
  height:100%;
`

export default function FilterByState() {
    const { url, allParks } = useSelector((state) => state.park)
    const [parksByState, setParksByState] = useState([]);
    const [checkedStates, setCheckedStates] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const newState = [];
        allParks.forEach((park) => {

            const states = park.states.split(',');
            states.forEach((state) => {
                if (!newState[state]) {
                    newState[state] = [];
                }
                newState[state].push(
                    {
                        id: park.id,
                        name: park.name,
                        img: park.img
                    });
            });
        });
        setParksByState(newState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const checkedBoxChange = (e) => {
        const { name, checked } = e.target;
        setCheckedStates((p) => ({ ...p, [name]: checked, }))
    }
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
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            {Object.entries(parksByState).map(([state, parks]) => (
                <div key={state}>
                    <span>{state}({parks.length})</span>
                    <input
                        type='checkbox'
                        name={state}
                        checked={checkedStates[state] || false}
                        onChange={checkedBoxChange} />
                    {checkedStates[state] && (
                        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {parks.map((park) => (
                                <StyledLink to={park.id}
                                    onClick={() => {
                                        dispatch(setIsLoading(true))
                                        dispatch(setClickParkName(park.id))
                                        clickLink(park.id)
                                    }
                                    }>{park.name}
                                    <StyledImg src={park.img} alt='' />
                                </StyledLink>
                            ))}
                        </ul>)}
                </div>
            ))}
        </div>
    )
}