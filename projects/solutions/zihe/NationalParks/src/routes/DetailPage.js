import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { url } from '../constants';
import FetchImg from '../components/FetchImg'

export default function DetailPage() {
    const [parkUrl, setParkUrl] = useState(null);
    const [parkdscpt, setParkDscpt] = useState(null);
    const [parkLct, setParkLct] = useState([]);
    const [activity, setActivity] = useState([]);
    const [topic, setTopic] = useState([]);
    const [phone, setPhone] = useState([]);
    const [phoneType, setPhoneType] = useState([]);
    const [email, setEmail] = useState([]);
    const [entranceFeesCost, setEntranceFeesCost] = useState([]);
    const [entranceFeesDe, setEntranceFeesDe] = useState([]);
    const [entranceFeesTt, setEntranceFeesTt] = useState([]);
    const [entrancePassesCost, setEntrancePassesCost] = useState([]);
    const [entrancePassesDe, setEntrancePassesDe] = useState([]);
    const [entrancePassesTt, setEntrancePassesTt] = useState([]);
    const [direction, setDirection] = useState([]);
    const [addressPC, setAddressPC] = useState([]);
    const [city, setCity] = useState('');
    const [addressType, setAddressType] = useState([]);
    const [addressLine1, setAddressLine1] = useState([]);
    const [addressLine2, setAddressLine2] = useState([]);
    const [addressLine3, setAddressLine3] = useState([]);
    const [weather, setWeather] = useState([]);
    const clickParkName = useSelector((state) => state.park.clickParkName)
    const url = useSelector((state) => state.park.Url)

    useEffect(() => {
        const newParkInfo = async () => {
            const parkInfo = await (await fetch(url)).json();
            const parkInformation = parkInfo.data.find(p => p.fullName === clickParkName);
            setParkUrl(parkInformation.url);
            setParkDscpt(parkInformation.description);
            setParkLct([parkInformation.latitude, parkInformation.longitude, parkInformation.states])
            const activityArray = parkInformation.activities.map(activity => activity.name);
            setActivity(activityArray);
            const topicArray = parkInformation.topics.map(topic => topic.name)
            setTopic(topicArray);
            const phoneArray = parkInformation.contacts.phoneNumbers.map(phone => phone.phoneNumber)
            setPhone(phoneArray);
            const phoneTypeArray = parkInformation.contacts.phoneNumbers.map(phone => phone.type)
            setPhoneType(phoneTypeArray);
            setEmail(parkInformation.contacts.emailAddresses[0].emailAddress);
            const entranceFeesCostArray = parkInformation.entranceFees.map(entranceFeesCost => entranceFeesCost.cost)
            setEntranceFeesCost(entranceFeesCostArray);
            const entranceFeesDArray = parkInformation.entranceFees.map(entranceFeesDe => entranceFeesDe.description)
            setEntranceFeesDe(entranceFeesDArray);
            const entranceFeesTtArray = parkInformation.entranceFees.map(entranceFeesTt => entranceFeesTt.title)
            setEntranceFeesTt(entranceFeesTtArray);
            const entrancePassesCostArray = parkInformation.entrancePasses.map(entrancePassesCost => entrancePassesCost.cost)
            setEntrancePassesCost(entrancePassesCostArray);
            const entrancePassesDArray = parkInformation.entrancePasses.map(entrancePassesDe => entrancePassesDe.description)
            setEntrancePassesDe(entrancePassesDArray);
            const entrancePassesTtArray = parkInformation.entrancePasses.map(entrancePassesTt => entrancePassesTt.title)
            setEntrancePassesTt(entrancePassesTtArray);
            setDirection([parkInformation.directionsInfo, parkInformation.directionsUrl]);
            const addressTypeArray = parkInformation.addresses.map(addressType => addressType.type);
            setAddressType(addressTypeArray);
            setCity(parkInformation.addresses[0].city);
            const addressPCArray = parkInformation.addresses.map(addressPC => addressPC.postalCode);
            setAddressPC(addressPCArray);
            const addressLine1Array = parkInformation.addresses.map(addressLine1 => addressLine1.line1);
            setAddressLine1(addressLine1Array);
            const addressLine2Array = parkInformation.addresses.map(addressLine2 => addressLine2.line2);
            setAddressLine2(addressLine2Array);
            const addressLine3Array = parkInformation.addresses.map(addressLine3 => addressLine3.line3);
            setAddressLine3(addressLine3Array);
            setWeather(parkInformation.weatherInfo);
        };
        newParkInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div>
                <h3>Brief description</h3>
                <p>{parkdscpt}</p>
                <p>Topics: {topic.map((item, index) => <span>{item}; </span>)}</p>
                <Link to={parkUrl}>{parkUrl}</Link>
                <div>
                    <FetchImg />
                </div>
                <h3>Location</h3>
                <p>state: {parkLct[2]} city: {city}<br />latitude: {parkLct[0]} longitude: {parkLct[1]}</p>
                <p>Direction: {direction[0]}</p>
                <Link to={direction[1]}>{direction[1]}</Link>
                <h3>What you can do here</h3>
                <ul>
                    {activity.map((item, index) =>
                        <li key={index}>{item}</li>)}
                </ul>
                <h3>Contact</h3>
                <div style={{ display: 'flex' }}>
                    <span>{phoneType.map((item, index) => <div>{item}: </div>)}</span>
                    <span>{phone.map((item, index) => <div>{item}</div>)}</span>
                </div>
                <p>Email: {email}</p>
                <div>
                    {addressType.map((item, index) => <div>{item}: {addressLine1[index]} {addressLine2[index]} {addressLine3[index]}<br /> Postal code: {addressPC[index]} </div>)}
                </div>
                <h3>Entrance Fees</h3>
                <div>
                    {entranceFeesDe.map((item, index) => <div>{entranceFeesTt[index]}: <br /><strong>{entranceFeesCost[index]}$</strong> {item}</div>)}
                </div>
                <div>
                    {entrancePassesDe.map((item, index) => <div>{entrancePassesTt[index]}: <br /><strong>{entrancePassesCost[index]}$</strong> {item}</div>)}
                </div>
                <h3>Weather Information</h3>
                <p>{weather}</p>
            </div>
        </div >
    )
}