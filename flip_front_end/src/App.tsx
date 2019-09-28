import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Results from './components/Results/Results';
import {BrowserRouter as Router, Route} from "react-router-dom";
// @ts-ignore
import Fade from 'react-reveal/Fade';

const App: React.FC = () => {
    return (
        <Router>
            <Navigation>
                <Fade>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/results" component={Results}/>
                </Fade>
            </Navigation>
        </Router>
    );
};

export default App;
