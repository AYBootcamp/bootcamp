import React, { useEffect } from 'react'
import FetchParks from '../components/FetchParks'
import { useDispatch, useSelector } from 'react-redux'
import { setNumbers } from '../redux/parkSlice'

export default function ListPage() {
    const dispatch = useDispatch();
    const Numbers = useSelector((state) => state.park.Numbers);
    const url = useSelector((state) => state.park.Url)
    useEffect(() => {
        const parkNumber = async () => {
            const parkNums = await (await fetch(url)).json();
            const parkNum = parkNums.total;
            dispatch(setNumbers(parkNum))
        };
        parkNumber();
    }, [])

    return (
        <div>
            <div>
                <FetchParks />
            </div>
            <div>
                {/* {Numbers} parks in total */}
            </div>
        </div>
    )
}