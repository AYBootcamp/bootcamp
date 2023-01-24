import './App.css';
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

function App() {
  const [bill, setBill] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [people, setPeople] = useState(1)
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)
  const tips = [0.05, 0.1, 0.15, 0.25, 0.5]
  const [selectTip, setSelectTip] = useState(false)

  function clickChange(e) {
    var btns = document.getElementsByClassName('tip-btn');
    for (var i = 0; i < 5; i++) {
      btns[i].style.borderColor = '#F4F4F4';
    }
    e.currentTarget.style.borderColor = 'black';
  }

  function resetChange() {
    let btns = document.getElementsByClassName('tip-btn');
    for (let i = 0; i < 5; i++) {
      btns[i].style.borderColor = '#F4F4F4';
    }
    let calculateBtn = document.getElementsByClassName('calculate');
    calculateBtn[0].style.background = 'rgb(200, 197, 197)';
    calculateBtn[0].style.color = '#AB9686';
    let resetBtn = document.getElementsByClassName('reset');
    resetBtn[0].style.background = 'rgb(200, 197, 197)';
    resetBtn[0].style.color = '#AB9686';
  }

  function clickReset() {
    let resetBtn = document.getElementsByClassName('reset');
    resetBtn[0].style.background = 'rgb(195, 189, 119)';
    resetBtn[0].style.color = 'black';
  }

  useEffect(() => {
    let calculateBtn = document.getElementsByClassName('calculate');
    if (tipPercentage > 0 && bill > 0) {
      console.log({ tipPercentage }, { bill });
      calculateBtn[0].style.background = 'rgb(195, 189, 119)';
      calculateBtn[0].style.color = 'black';
    }
  }, [tipPercentage, bill,])

  return (
    <div className='background'>
      <div className='left'>
        <div className='bill'>
          Bill
        </div>
        <div>
          <input className={classnames('bill-input')} value={bill} type='number' placeholder='0'
            onChange={(e) => {
              setBill(e.target.value);
              clickReset();
            }}></input>
        </div>
        <div className='tip'>
          Select Tip %
        </div>
        <div className='tip-number'>
          {tips.map((tipPercentageBtn, index) => (
            <button className={classnames('tip-btn', { 'tip-btn-select': selectTip === index })}
              value={tipPercentage} type='number'
              onClick={(e) => {
                setSelectTip(index);
                setTipPercentage(tipPercentageBtn);
                clickReset();
                clickChange(e);
              }} >{tipPercentageBtn * 100}%</button>
          ))}
          <button className='custom' disabled={true}>Custom</button>
        </div>
        <div className='people'>
          Number of people
        </div>
        <div>
          <input className={classnames('people-input')} value={people} type='number' placeholder='0'
            onChange={(e) => {
              setPeople(e.target.value);
              clickReset()
            }}></input>
        </div>
      </div>
      <div className='right'>
        <div className='right1'>
          <span>
            <div className='tip-amount'>Tip Amount</div>
            <div className='person1'>/person</div>
          </span>
          <span className='final-tip'>
            $ {tip.toFixed(2)}
          </span>
        </div>
        <div className='right2'>
          <span>
            <div className='total'>Total</div>
            <div className='person2'>/person</div>
          </span>
          <span className='final-total'>
            $ {total.toFixed(2)}
          </span>
        </div>
        <div>
          <button className='calculate' onClick={() => {
            setTip(bill * tipPercentage / people);
            setTotal(bill * (1 + tipPercentage) / people)
          }}>
            Calculate
          </button>
        </div>
        <div>
          <button className={classnames('reset')}
            onClick={() => {
              setBill(0);
              setTipPercentage(0);
              setPeople(1);
              setTip(0);
              setTotal(0);
              resetChange()
            }}>
            Reset
          </button>
        </div>
      </div>
    </div >
  );
}

export default App;