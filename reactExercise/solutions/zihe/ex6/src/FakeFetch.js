import React from 'react';
import Fruit from './Fruit';
import Animal from './Animal';
import { FRUITTIMER, ANIMALTIMER } from './constants';

function FakeFetch() {
    return (
        <>
            <Fruit fruitTime={FRUITTIMER} />
            <Animal animalTime={ANIMALTIMER} />
        </>

    )
}
export default FakeFetch;