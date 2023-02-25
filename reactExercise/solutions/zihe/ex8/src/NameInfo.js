import React, { useState, useEffect } from 'react';
import Spinner from './spinner';

function NameInfo() {
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);
    const [nation, setNation] = useState([]);
    const [loading, setloading] = useState(0);

    useEffect(() => {
        const fetchName = async () => {
            const agifyResponse = await fetch(`https://api.agify.io?name=${name}`);
            const agifyData = await agifyResponse.json();
            setAge(agifyData.age);

            const genderizeResponse = await fetch(`https://api.genderize.io?name=${name}`);
            const genderizeData = await genderizeResponse.json();
            setGender(genderizeData.gender);

            const nationalizeResponse = await fetch(`https://api.nationalize.io?name=${name}`);
            const nationalizeData = await nationalizeResponse.json();

            setNation(
                [
                    [nationalizeData.country[0].country_id, nationalizeData.country[0].probability],
                    [nationalizeData.country[1].country_id, nationalizeData.country[1].probability],
                    [nationalizeData.country[2].country_id, nationalizeData.country[2].probability],
                    [nationalizeData.country[3].country_id, nationalizeData.country[3].probability],
                    [nationalizeData.country[4].country_id, nationalizeData.country[4].probability]
                ]
            );
        }
        fetchName();
    }, [name])
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setName(e.target.elements.name.value);
                setloading(1);
                setTimeout(() => { setloading(0) }, '1000')
            }}>
                <p>Name:</p>
                <input type='text' name='name'></input>
                <button type='submit'>submit</button>
            </form>
            {loading === 1 ? (
                <Spinner />) : (
                <div>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                    <p>Nationality: {nation[0][0]}</p>
                </div>
            )
            }
        </div>
    )
}
export default NameInfo;