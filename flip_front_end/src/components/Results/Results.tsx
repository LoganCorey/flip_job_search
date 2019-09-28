import React from 'react';
import KeywordsSection from './KeywordsSection/KeywordsSection';
import Typography from '@material-ui/core/Typography';
import MatchRate from './MatchRate/MatchRate';
import {connect} from 'react-redux';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Results = (props:any) =>{
    return(
        <React.Fragment>

        <Fade >
            {props.scanned === true?<div><MatchRate/> <KeywordsSection/></div>:
                <Typography>Scan your resume and job posting to begin</Typography>}
        </Fade>
        </React.Fragment>
    )
};

const mapStateToProps = (state: any) => {
    return {
        scanned: state.scanReducer.scanned,
    };
};
export default connect(mapStateToProps, null)(Results);