import React from 'react';
import KeywordsSection from './KeywordsSection/KeywordsSection';
import Typography from '@material-ui/core/Typography';
import MatchRate from './MatchRate/MatchRate';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
// @ts-ignore
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '50px',
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  title: {
    fontWeight: 500,
  }
});

const Results = (props: any) => {
  const classes = useStyles();
  return (
    <React.Fragment>

      <Fade >
        {props.scanned === true ? <div><MatchRate /> <KeywordsSection /></div> :
          props.loading === true ?
            <div>
              <Typography variant="h4" component="h4" className={classes.title}>
                Comparing with Job Posting...
                </Typography>
              <div className={classes.root}>
                <LinearProgress />

              </div>
            </div>

            :
            <Typography>Scan your resume and job posting to begin</Typography>}
      </Fade>
    </React.Fragment>
  )
};

const mapStateToProps = (state: any) => {
  return {
    scanned: state.scanReducer.scanned,
    loading: state.scanReducer.loading,
  };
};
export default connect(mapStateToProps, null)(Results);
