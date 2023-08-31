import React, { useState, useEffect } from 'react';
import dataJson from './assets/data.json';
import './App.css';

function App() {
  const [point, setpoint] = useState(0);

  function calc_point(){
    var sums = 0, total = 0;
    dataJson.map((item, index) => (
      item.score <= 100 ?
        sums += item.score :
        sums += 100,
      total++
    ));
    setpoint((sums / total).toFixed(0));
  }

  useEffect(() => {
    calc_point();
  });

  return (
    <>
      
      <div className='app'>
        <div className='results'>
          <p className='top'>Your Result</p>
          <div className='score'>
            <p>{point}</p>
            <p>of 100</p>
          </div>
          <p className='middle'>Great</p>
          <p className='bottom'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className='summary'>
          <p className='top'>Summary</p>
          <div className='group'>
            {
              dataJson.map((item, index) => (
                <div className={`${
                  index % 4 === 0
                    ? 'color0'
                    : index % 4 === 1
                    ? 'color1'
                    : index % 4 === 2
                    ? 'color2'
                    : index % 4 === 3
                    ? 'color3'
                    : ''
                } row`}>
                  <div className='contain'>
                    <img src={item.icon} alt='img'/>
                    <p>{item.category}</p>
                  </div>
                  <p className='point'>{item.score <= 100 ? item.score : '100'} <span>/ 100</span></p>
                </div>
              ))
            }
          </div>
          <button>Continue</button>
        </div>
      </div>
    </>
  );
}

export default App;
