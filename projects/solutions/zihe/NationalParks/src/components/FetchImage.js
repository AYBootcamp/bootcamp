import React from 'react';
import { useSelector } from 'react-redux';

export default function FetchImg() {
    const parkImg = useSelector((state) => state.park.details.images);

    return (
        <div>
            <div>
                {parkImg.map((item, index) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={item.url}
                            alt={item.altText}
                            title={item.title}
                            width="500"
                        />
                        {item.caption}
                    </div>
                ))}
            </div>
        </div>
    );
}