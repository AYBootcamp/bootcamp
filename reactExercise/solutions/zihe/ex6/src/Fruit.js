import React from 'react';
import useFakeFetch from './hooks/useFakeFetch';

function Fruit(props) {
  const isLoading = useFakeFetch(props.fruitTime)

  if (isLoading) {
    return <div>loading...</div>
  }
  return (
    <>
      <ul>
        <li>Grape</li>
        <li>Watermelon</li>
        <li>Strawberry</li>
      </ul>
    </>
  )
}

export default Fruit;