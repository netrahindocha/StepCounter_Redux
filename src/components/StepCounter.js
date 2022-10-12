import React from 'react'
import '../css/StepCounter.css'

function StepCounter() {
  return (
    <div className='container'>
      <h1>You've walked 42 steps today!</h1>
      <button id='add'>Add a Step</button>
      <button id='reset'>Reset Steps</button>
    </div>
  )
}

export default StepCounter
