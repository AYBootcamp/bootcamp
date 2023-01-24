import React from 'react';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import { ADD, MULTIPLY } from './constants'

class Calculator extends React.Component {
  render() {
    return (
      <>
        {/* "choose" can be "Multiply" or "Add" */}
        <FunctionComponent choose={MULTIPLY} />
        <ClassComponent choose={ADD} />
      </>
    )
  }
}

export default Calculator;