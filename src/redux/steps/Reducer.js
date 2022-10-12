import { ADD_STEPS, RESET_STEPS } from "./ActionConstant"

const initialState = {
    numOfSteps: 0
}

const stepReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_STEPS: return{
            ...state,
            numOfSteps: state.numOfSteps + 1
        }
        case RESET_STEPS: return{
            ...state,
            numOfSteps: 0
        }
        default: return state
    }
}

export default stepReducer