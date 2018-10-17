import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {createStore} from 'redux';
import adminReducer from './reducer/adminReducer';

import './assets/styles/app.scss';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(adminReducer);

ReactDOM.render(
    <BrowserRouter >
        <Route component={App} />
    </BrowserRouter>,
    document.getElementById('coder-app')
);
registerServiceWorker();
