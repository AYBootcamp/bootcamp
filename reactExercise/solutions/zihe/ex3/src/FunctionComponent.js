import './App.css';
import React, { useState } from 'react';
import { ADD, MULTIPLY } from './constants'

const App = (props) => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [total, setTotal] = useState(0)

  function MultiplyOrPlus(props) {
    if (props === MULTIPLY) {
      return (num1 * num2)
    } else if (props === ADD) {
      return (parseInt(num1) + parseInt(num2))
    } else {
      return 0
    }
  }
  return (
    <div>
      Function Component Way:
      <input value={num1} type='number'
        onChange={(e) => setNum1(e.target.value)} />
      <input value={num2} type='number'
        onChange={(e) => setNum2(e.target.value)} />
      <button value={total} type='number'
        onClick={() => setTotal(MultiplyOrPlus(props.choose))}>
        {props.choose}
      </button>
      <span>
        Result: {total}
      </span>
    </div>
  )
}
export default App;