import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from './Rating/Rating';
import {connect} from 'react-redux';

const MatchRate = (props: any) => {
    return (
        <React.Fragment>
            <Box mt={5}>
                <Typography variant={"h3"} component="h3" align={"center"}
                            style={{fontWeight: 500}}>
                    Check Out How You Did
                </Typography>
                <Typography variant={"h5"} component="h5" align={"center"}
                            style={{marginBottom: '20px', fontWeight: 500, color: 'rgba(0,0,0,0.5)'}}>
                    Your match rating
                </Typography>
                <Rating rating={props.rating}/>
            </Box>
        </React.Fragment>
    );
};

const mapStateToProps = (state: any) => {
    return {
        rating: state.scanReducer.rating,
    };
};

export default connect(mapStateToProps, null)(MatchRate);
