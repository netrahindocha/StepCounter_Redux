import React from 'react'
import '../css/StepCounter.css'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../redux/steps/Dispatch'

function StepCounter(props) {
  return (
    <div className='container'>
      <h1>You've walked {props.numOfSteps} steps today!</h1>
      <button id='add' onClick={props.addSteps}>Add Step</button>
      <button id='reset' onClick={props.resetSteps}>Reset Steps</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(StepCounter)