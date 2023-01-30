import React from 'react';
import useReFetch from './hooks/useReFetch';

function Animal(props) {
    const [isLoading, reFetch] = useReFetch(props.animalTime)

    if (isLoading) {
        return <div>loading...</div>
    }
    return (
        <>
            <ul>
                <li>Tiger</li>
                <li>Lion</li>
                <li>Rabbit</li>
            </ul>
            <button onClick={() => { reFetch() }}>
                re-fetch
            </button>
        </>
    )
}

export default Animal;