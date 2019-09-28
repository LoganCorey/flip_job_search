import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers} from "redux";
import { render } from "react-dom";
import { Provider } from "react-redux";
import textInputReducer from './store/reducers/TextInput';
import scanReducer from './store/reducers/Scan';
import thunk from 'redux-thunk'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#7986cb",
            main: "#283593",
            dark: "#3d5afe"
        },
        secondary: {
            main: "#f44336"
        }
    }
});

const rootReducer = combineReducers({
    textInputerReducer:textInputReducer,
    scanReducer: scanReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();