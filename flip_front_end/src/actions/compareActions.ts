import * as actionTypes from './compareActionTypes';
import axios from 'axios';

//https://stackoverflow.com/questions/39254562/csrf-with-django-reactredux-using-axios
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
// Saves the result from compare
export const saveResult = (res:any) => {
    console.log(res);

    return{
        type:actionTypes.COMPARE,
        payload:res['data']
    }
};


export function compare(resume_text:string, job_text:string ){

     let data = new FormData();
     data.append("job_text",job_text);
     data.append("resume_text",resume_text);
    return (dispatch:any) =>{
           axios.post('/api/skill/compare/', data)
  .then(function (response) {
      console.log(response);
      dispatch(saveResult((response)))
  })
  .catch(function (error) {
    console.log(error);
  });
           
    }

}
