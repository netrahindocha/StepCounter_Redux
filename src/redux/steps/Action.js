import { ADD_STEPS, RESET_STEPS } from './ActionConstant'

const addSteps = () => {
    return{
        type: ADD_STEPS
    }
}

export const resetSteps = () => {
    return{
        type: RESET_STEPS
    }
}

export default addSteps;
