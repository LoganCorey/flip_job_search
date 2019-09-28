import * as actionTypes from "./actiontypes";

export function changeResumeText(event: any) {
  return {
    type: actionTypes.CHANGE_RESUME_TEXT,
    text: event.target.value
  };
}

export function clearResumeText(text = "") {
  return {
    type: actionTypes.CLEAR_RESUME,
    text: text
  };
}

export function changeJobText(e: any) {
  return {
    type: actionTypes.CHANGE_JOB_TEXT,
    text: e.target.value
  };
}

export function clearJobText() {
  return {
    type: actionTypes.CLEAR_JOB,
    text: ""
  };
}
