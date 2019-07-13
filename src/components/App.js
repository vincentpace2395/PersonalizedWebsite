import React from 'react';
import Header from './Header/Header';
import history from './history';
import HomePage from '../components/Home/Home';
import Resume from '../components/Resume/Resume';
import Profiles from '../components/Profiles/Profiles';
import About from '../components/About/About';
import {Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <div className='ui container '>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/resume" exact component={Resume} />
                        <Route path="/profiles" exact component={Profiles} />
                        <Route path="/about" exact component={About} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;