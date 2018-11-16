import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/app.scss';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-126466003-1');
ReactGA.pageview('/');
const tagManagerArgs = {
    gtmId: 'GTM-M92V23Q'
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
    <BrowserRouter >
        <App/>
    </BrowserRouter>,
    document.getElementById('coder-app')
);
registerServiceWorker();
