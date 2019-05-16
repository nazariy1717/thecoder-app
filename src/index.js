import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import './assets/styles/app.scss';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { unregister as unregisterServiceWorker } from './registerServiceWorker';

import { store } from './store';
import {adminLoggedIn} from './actions/admin';

import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga';

if(localStorage.adminJWT){
    const admin = { token: localStorage.adminJWT};
    store.dispatch(adminLoggedIn(admin));
}

ReactGA.initialize('UA-126466003-1');
ReactGA.pageview('/');
const tagManagerArgs = {
    gtmId: 'GTM-M92V23Q'
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('coder-app')
);
// registerServiceWorker();
unregisterServiceWorker();