import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//import { url } from '../constants';

export default function FetchImg() {
    const clickParkName = useSelector((state) => state.park.clickParkName)
    const url = useSelector((state) => state.park.Url)
    const [parkImg, setParkImg] = useState([]);
    const [altText, setAltText] = useState([]);
    const [title, setTitle] = useState([]);
    const [caption, setCaption] = useState([]);

    useEffect(() => {
        const newImg = async () => {
            const newImgs = await (await fetch(url)).json();
            const imgs = newImgs.data.find(p => p.fullName === clickParkName);
            const parkImgArray = imgs.images.map(parkImg => parkImg.url)
            setParkImg(parkImgArray);
            const altTextArray = imgs.images.map(altText => altText.altText)
            setAltText(altTextArray);
            const titleArray = imgs.images.map(title => title.title)
            setTitle(titleArray);
            const captionArray = imgs.images.map(caption => caption.caption)
            setCaption(captionArray);
        };
        newImg();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div >
            <div>
                {parkImg.map((item, index) => <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={item} alt={altText[index]} title={title[index]} width='500' />{caption[index]}</div>)}
            </div>
        </div>
    )
}