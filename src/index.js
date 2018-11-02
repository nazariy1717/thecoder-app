import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import './assets/styles/app.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { store } from './store';
import {adminLoggedIn} from './actions/admin';

if(localStorage.adminJWT){
    const admin = { token: localStorage.adminJWT};
    console.log(admin);
    store.dispatch(adminLoggedIn(admin));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('coder-app')
);
registerServiceWorker();
