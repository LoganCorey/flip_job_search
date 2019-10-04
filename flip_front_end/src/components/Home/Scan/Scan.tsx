import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { compare } from '../../../actions/compareActions';
import { Link } from 'react-router-dom';

type ScanProps = {
  resumeText: string,
  jobText: string,
  compareTextHandler: Function
}


/**
 * Component for scanning a users resume and a job posting
 */
const Scan = (props: ScanProps) => {
  return (
    <div
      style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}
    >
      <Link to={"/results"}>

        <Button variant="contained"

          onClick={() => props.compareTextHandler(props.resumeText, props.jobText)}
          color="primary"
          style={{ color: 'white', borderRadius: '5px', width: '400px', padding: '5px', fontSize: "1.2em" }}>
          Scan
                </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    resumeText: state.textInputerReducer.resumeText,
    jobText: state.textInputerReducer.jobText
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    compareTextHandler: (resume_text: string, job_text: string) => dispatch(compare(resume_text, job_text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scan);
