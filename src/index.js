import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import './assets/styles/app.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { store } from './store';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('coder-app')
);
registerServiceWorker();
