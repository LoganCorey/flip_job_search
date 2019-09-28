import React from "react";
import InputField from "./InputField/InputField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from "react-redux";
import {
    changeResumeText,
    clearResumeText,
    changeJobText,
    clearJobText
} from "../../../actions/TextInputActions";


type InputProps = {
    resumeText: string,
    jobText: string
}

/**
 * General component for inputting Text
 */
const InputSection = (props: any) => {
    return (
        <React.Fragment>
            <Container maxWidth="lg" style={{marginTop: "40px"}}>
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <InputField
                            title="Paste Resume"
                            label="Resume Text"
                            text={props.resumeText}
                            handleChange={props.changeResumeText}
                            clearText={props.clearResumeText}
                        >
                            <DeleteIcon/>
                        </InputField>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <InputField
                            title="Paste Job Description"
                            label="Job Text"
                            text={props.jobText}
                            handleChange={props.changeJobText}
                            clearText={props.clearJobText}
                        >
                            <DeleteIcon/>
                        </InputField>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};


const mapStateToProps = (state: any): InputProps => {
    return {
        resumeText: state.textInputerReducer.resumeText,
        jobText: state.textInputerReducer.jobText
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeResumeText: (ev: any) => dispatch(changeResumeText(ev)),
        clearResumeText: () => dispatch(clearResumeText()),
        changeJobText: (ev: any) => dispatch(changeJobText(ev)),
        clearJobText: () => dispatch(clearJobText())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputSection);
