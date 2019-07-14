import React from 'react';
import Header from './Header/Header';
import history from './history';
import HomePage from '../components/Home/Home';
import ResumePage from './Resume/ResumePage';
import Profiles from '../components/Profiles/Profiles';
import ContactPage from './Contact/ContactPage';
import {Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <div className='ui container '>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/contact-me" exact component={ContactPage} />
                        <Route path="/resume" exact component={ResumePage} />
                        <Route path="/profiles" exact component={Profiles} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;