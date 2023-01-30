import React from 'react';
import Fruit from './Fruit';
import Animal from './Animal';
import { FRUIT_TIMER, ANIMAL_TIMER } from './constants';

function FakeFetch() {
    return (
        <>
            <Fruit fruitTime={FRUIT_TIMER} />
            <Animal animalTime={ANIMAL_TIMER} />
        </>

    )
}
export default FakeFetch;