import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import configureStore from './store/store.config';
import { Provider } from 'react-redux';
import { loadProjects } from './actions/ProjectActions';
import { initialize, addTranslation } from 'react-localize-redux';

const store = configureStore();
store.dispatch(loadProjects());

const languages = ['en'];
store.dispatch(initialize(languages));

const json = require('./locale/en.json');
store.dispatch(addTranslation(json));

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
