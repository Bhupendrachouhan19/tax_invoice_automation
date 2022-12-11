import { getByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react'
import './dateTime.css'

const DateTime = () => {

  let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div>
      <div className='dateTime'>
        <h1>Date :- {date}</h1>
        <h1>Time :- {currentTime}</h1>
      </div>
    </div>
  )
}

export default DateTime