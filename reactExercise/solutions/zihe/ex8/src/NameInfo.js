import React, { useState } from 'react';
import Spinner from './spinner';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function NameInfo() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);
    const [nation, setNation] = useState([[], [], [], [], []]);
    const [loading, setloading] = useState(false);
    const [history, setHistory] = useState(null);

    const data = {
        labels: [nation[0][0], nation[1][0], nation[2][0], nation[3][0], nation[4][0]],
        datasets: [
            {
                label: '# of Nations',
                data: [nation[0][1], nation[1][1], nation[2][1], nation[3][1], nation[4][1]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 2,
            },
        ],
    }

    const fetchName = async (newName) => {
        const agifyData = await (await fetch(`https://api.agify.io?name=${newName}`)).json();
        setAge(agifyData.age);
        const genderizeData = await (await fetch(`https://api.genderize.io?name=${newName}`)).json();
        setGender(genderizeData.gender);
        const nationalizeData = await (await fetch(`https://api.nationalize.io?name=${newName}`)).json();
        setNation(
            [
                [nationalizeData.country[0].country_id, nationalizeData.country[0].probability],
                [nationalizeData.country[1].country_id, nationalizeData.country[1].probability],
                [nationalizeData.country[2].country_id, nationalizeData.country[2].probability],
                [nationalizeData.country[3].country_id, nationalizeData.country[3].probability],
                [nationalizeData.country[4].country_id, nationalizeData.country[4].probability]
            ]
        );
        setloading(false);
    };

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setName(e.target.elements.name.value);
                if (history !== e.target.elements.name.value) {
                    setloading(true)
                    fetchName(e.target.elements.name.value)
                }
                setHistory(e.target.elements.name.value);
            }}>
                <p>Name:</p>
                <input type='text' name='name'></input>
                <button type='submit'>submit</button>
            </form>
            {loading === true ? (
                <Spinner />) : (
                <div>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                    <p>Nationality: {nation[0][0]}</p>
                    <Pie data={data} />
                </div>
            )
            }
        </div>
    )
}
export default NameInfo;