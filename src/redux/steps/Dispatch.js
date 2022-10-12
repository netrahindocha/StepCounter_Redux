import { addSteps, resetSteps } from "./Action"

export const mapStateToProps = (state) => {
    return{
      numOfSteps: state.numOfSteps
    }
}
  
export const mapDispatchToProps = (dispatch) => {
    return{
      addSteps: () => {dispatch(addSteps())},
      resetSteps: () => {dispatch(resetSteps())}
    }
}