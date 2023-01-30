import React from 'react';
import useReFetch from './hooks/useReFetch';

function Fruit(props) {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, reFetch] = useReFetch(props.fruitTime)

  if (isLoading) {
    return <div>loading...</div>
  }
  return (
    <ul>
      <li>Grape</li>
      <li>Watermelon</li>
      <li>Strawberry</li>
    </ul>
  )
}

export default Fruit;