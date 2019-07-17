import React from 'react';
import Header from './Header/Header';
import history from './history';
import HomePage from '../components/Home/Home';
import ResumePage from './Resume/ResumePage';
import Profiles from './Links/Profiles';
import AboutPage from './About/AboutPage';
import {Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <div className='ui container '>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/about-me" exact component={AboutPage} />
                        <Route path="/resume" exact component={ResumePage} />
                        <Route path="/links" exact component={Profiles} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;