import React from "react";
import InputSection from "./InputSection/Input";
import Scan from "./Scan/Scan";
import Typography from '@material-ui/core/Typography';
import classes from './styles.module.css';
// @ts-ignore
import Fade from 'react-reveal/Fade';

/**
 * Basic component where a user can scan a resume and job posting
 */
const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Fade >
            <Typography variant={"h4"} className={classes.title} component={"h4"} align="center">
                Scan Your Resume and Job Posting
            </Typography>
            <Typography variant={"h6"} className={classes.subtitle} component={"h6"} align="center">
                See how closely your resume compares
            </Typography>
            <InputSection/>
            <Scan/>
            </Fade>
        </React.Fragment>
    );
};

export default Home;
