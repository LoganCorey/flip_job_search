import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './styles.module.css';

type InputProps = {
    title: string,
    label: string,
    text: string,
    handleChange: any,
    clearText:any,
    children: any,
}

const InputField = (props: InputProps) => {

    return (
        <Paper elevation={5} style={{padding: "20px"}}>
            <Typography variant="h5" component="h5" color="primary">
                {props.title}
            </Typography>
            <TextField
                id="outlined-multiline-static"
                label={props.label}
                multiline
                rows="20"
                className={classes.Input}
                margin="normal"
                variant="outlined"
                value={props.text}
                onChange={props.handleChange}
            />
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%'}}>
                <div>
                    <Button className={classes.Button} onClick={props.clearText}> {props.children} clear text</Button>
                </div>
            </div>
        </Paper>
    )
};

export default InputField;