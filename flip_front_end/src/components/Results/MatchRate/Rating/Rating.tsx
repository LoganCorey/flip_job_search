import React from 'react';
import classes from './styles.module.css';

const Rating = (props: any) => {
    return (
        <div className={classes.flexWrapper}>
            <div className={classes.singleChart}>
                <svg viewBox="0 0 36 36" className={classes.circularChart + ' ' + classes.green}>
                    <path className={classes.circleBg}
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className={classes.circle}
                          stroke-dasharray={props.rating + ", 100"}
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="19" y="20.35" className={classes.percentage}>{props.rating}%</text>
                </svg>
            </div>
        </div>
    )
};
export default Rating;