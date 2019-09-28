import * as actionTypes from '../../actions/actiontypes';

const initialState = {
    resumeText: "",
    jobText: "",
    scanText: "compare"
  };
  
  const reducer = (state = initialState, action: any) => {
  
    switch (action.type) {
      case actionTypes.CHANGE_RESUME_TEXT:
        return {
          ...state,
          resumeText: action.text
        };
      case actionTypes.CLEAR_RESUME:
        return {
          ...state,
          resumeText: action.text
        };
  
      case actionTypes.CHANGE_JOB_TEXT:
        return {
          ...state,
          jobText: action.text
        };
      case actionTypes.CLEAR_JOB:
        return {
          ...state,
          jobText: ""
        };
      default:
        return state;
    }
  };
  
  export default reducer;