export const ADD_STEPS = 'ADD_STEPS'

export const RESET_STEPS = 'RESET_STEPS'

export const addSteps = () => {
    return{
        type: ADD_STEPS
    }
}

export const resetSteps = () => {
    return{
        type: RESET_STEPS
    }
}
