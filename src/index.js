import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/app.scss';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('coder-app'));
registerServiceWorker();
