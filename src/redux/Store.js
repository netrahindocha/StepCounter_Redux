import { createStore } from 'redux'
import stepReducer from './steps/Reducer'

const store = createStore(stepReducer)

export default store