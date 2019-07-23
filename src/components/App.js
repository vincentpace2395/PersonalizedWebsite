import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import history from './history';
import HomePage from '../components/Home/Home';
import DocumentsPage from './Documents/DocumentsPage';
import LinksPage from './Links/LinksPage';
import AboutPage from './About/AboutPage';
import {Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <div className='ui container '>
            <Router history={history}>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/about-me" exact component={AboutPage} />
                        <Route path="/documents" exact component={DocumentsPage} />
                        <Route path="/links" exact component={LinksPage} />
                    </Switch>
                    <Footer />
                </React.Fragment>
            </Router>
        </div>
    );
};

export default App;