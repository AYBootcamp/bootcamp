import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledTable = styled.table`
border:1px solid black;
`
export default function OperatingHours() {
    const operatingHours = useSelector((state) => state.park.details.operatingHours)
    return (
        <div >
            <StyledTable>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>

                    </tr>
                </thead>
                <tbody>
                    {operatingHours.map((item) => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.standardHours.monday}</td>
                            <td>{item.standardHours.tuesday}</td>
                            <td>{item.standardHours.wednesday}</td>
                            <td>{item.standardHours.thursday}</td>
                            <td>{item.standardHours.friday}</td>
                            <td>{item.standardHours.saturday}</td>
                            <td>{item.standardHours.sunday}</td>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </div>
    )
}