import React from 'react'
import '../css/StepCounter.css'
import { connect } from 'react-redux'
import addSteps from '../redux/steps/Action'


function StepCounter(props) {
  return (
    <div className='container'>
      <h1>You've walked {props.numOfSteps} steps today!</h1>
      <button id='add' onClick={props.addSteps}>Add a Step</button>
      <button id='reset'>Reset Steps</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    numOfSteps: state.numOfSteps
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addSteps: () => {dispatch(addSteps())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepCounter)
