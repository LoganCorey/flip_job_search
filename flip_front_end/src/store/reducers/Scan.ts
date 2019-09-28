import * as actionTypes from "../../actions/compareActionTypes";

const initialState = {
    resumeSkills: {},
    jobPostingSkills: {},
    scanned: false,
    scanText: "compare",
    rating: 0,
};

const reducer = (state = initialState, action: any) => {
    if (action.type === actionTypes.COMPARE) {
        console.log(action);
        return {
            ...state,
            resumeSkills: action.payload['resume_skills'],
            jobPostingSkills: action.payload['job_skills'],
            scanned: true,
            rating: action.payload['match_rate']
        };
    }
    else {
        return state;
    }

};

export default reducer;
