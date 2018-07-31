import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './assets/styles/build.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('coder-app'));
registerServiceWorker();
