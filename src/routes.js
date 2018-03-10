import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';

import Projects from './components/projects/Projects';
import AboutPage from './components/about/AboutPage';
import ContactMe from './components/contactMe/ContactMe';
import SplashScreen from './components/splashScreen/SplashScreen';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={SplashScreen} />
        <Route path="projects" component={Projects} />
        <Route path="about" component={AboutPage} />
        <Route path="contactMe" component={ContactMe} />
    </Route>
);