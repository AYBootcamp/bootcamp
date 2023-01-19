import './App.css';
import React, { useState } from 'react';

function App() {
  const [bill, setbill] = useState(0)
  const [tipp, settipp] = useState(0)
  const [people, setpeople] = useState(1)
  const [tip, settip] = useState(0)
  const [total, settotal] = useState(0)

  function clickChange(e) {
    var btns = document.getElementsByClassName('tipbtn');
    for (var i = 0; i < 5; i++) {
      btns[i].style.borderColor = '#F4F4F4';
    }
    e.currentTarget.style.borderColor = 'black';
  }

  function resetChange() {
    var btns = document.getElementsByClassName('tipbtn');
    for (var i = 0; i < 5; i++) {
      btns[i].style.borderColor = '#F4F4F4';
    }
    var calculatebtn = document.getElementsByClassName('calculate');
    calculatebtn[0].style.background = 'rgb(200, 197, 197)';
    calculatebtn[0].style.color = '#AB9686';
    var resetbtn = document.getElementsByClassName('reset');
    resetbtn[0].style.background = 'rgb(200, 197, 197)';
    resetbtn[0].style.color = '#AB9686';
  }

  function clickReset() {
    var resetbtn = document.getElementsByClassName('reset');
    resetbtn[0].style.background = 'rgb(195, 189, 119)';
    resetbtn[0].style.color = 'black';
  }

  function clickCalculate() {
    var calculatebtn = document.getElementsByClassName('calculate');
    if (tipp > 0 | bill > 0) {
      console.log({ tipp }, { bill });
      calculatebtn[0].style.background = 'rgb(195, 189, 119)';
      calculatebtn[0].style.color = 'black';
    }
  }

  return (
    <div className='background'>
      <div className='left'>
        <div className='bill'>
          Bill
        </div>
        <div>
          <input className='billinput' value={bill} type='number' placeholder='0'
            onChange={(e) => {
              setbill(e.target.value);
              clickReset();
              clickCalculate(bill, tipp)
            }}></input>
        </div>
        <div className='tip'>
          Select Tip %
        </div>
        <div className='tipnumber'>
          <button className='tipbtn' value={tipp} type='number'
            onClick={(e) => {
              settipp(0.05);
              clickChange(e);
              clickReset();
              clickCalculate(bill, tipp)
            }} >5%</button>
          <button className='tipbtn' value={tipp} type='number'
            onClick={(e) => {
              settipp(0.1);
              clickChange(e);
              clickReset();
              clickCalculate(bill, tipp)
            }} >10%</button>
          <button className='tipbtn' value={tipp} type='number'
            onClick={(e) => {
              settipp(0.15);
              clickChange(e);
              clickReset();
              clickCalculate(bill, tipp)
            }} >15%</button>
          <br />
          <button className='tipbtn' value={tipp} type='number'
            onClick={(e) => {
              settipp(0.25);
              clickChange(e);
              clickReset();
              clickCalculate(bill, tipp)
            }} >25%</button>
          <button className='tipbtn' value={tipp} type='number'
            onClick={(e) => {
              settipp(0.5);
              clickChange(e);
              clickReset();
              clickCalculate(bill, tipp)
            }} >50%</button>
          <button className='custom'>Custom</button>
        </div>
        <div className='people'>
          Number of people
        </div>
        <div>
          <input className='peopleinput' value={people} type='number' placeholder='0'
            onChange={(e) => {
              setpeople(e.target.value);
              clickReset()
            }}></input>
        </div>
      </div>
      <div className='right'>
        <div className='right1'>
          <span className='tipAP'>
            <div className='tipamount'>Tip Amount</div>
            <div className='person1'>/person</div>
          </span>
          <span className='finaltip'>
            $ {tip.toFixed(2)}
          </span>
        </div>
        <div className='right2'>
          <span className='totalp'>
            <div className='total'>Total</div>
            <div className='person2'>/person</div>
          </span>
          <span className='finaltotal'>
            $ {total.toFixed(2)}
          </span>
        </div>
        <div>
          <button className='calculate' onClick={() => {
            settip(bill * tipp / people);
            settotal(bill * (1 + tipp) / people)
          }}>
            Calculate
          </button>
        </div>
        <div>
          <button className='reset' onClick={() => {
            setbill(0);
            settipp(0);
            setpeople(1);
            settip(0);
            settotal(0);
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
