import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setParkListNames, setClickParkName, setPages, setUrl } from '../redux/parkSlice';
import { LIMIT } from '../constants';

export default function FetchParks() {
    const parkListNames = useSelector((state) => state.park.parkListNames);
    const Numbers = useSelector((state) => state.park.Numbers);
    const url = useSelector((state) => state.park.Url)
    const pageNumbers = Math.ceil(Numbers / LIMIT)
    const dispatch = useDispatch();
    const numArray = [];
    for (let i = 1; i <= pageNumbers; i++) { numArray.push(i) }

    useEffect(() => {
        const parksList = async () => {
            const parkNames = await (await fetch(url)).json();
            let arrey = [];
            for (let i = 0; i < parkNames.data.length; i++) {
                arrey.push(parkNames.data[i].fullName);
            }
            dispatch(setParkListNames(arrey))
        };
        parksList();
        console.log(url)
    }, [url])

    return (
        <div>
            <div>
                <ul>
                    {parkListNames.map((item, index) => (
                        <li><Link key={index} to={'DetailPage'}
                            onClick={() => {
                                dispatch(setClickParkName(item))
                            }}>{item}</Link></li>
                    ))}
                </ul>
            </div>
            <div>{numArray.map((item, index) => (<Link
                onClick={() => {
                    dispatch(setPages(index));
                    dispatch(setUrl())
                }}>{item}</Link>))}</div>
        </div>
    )
}