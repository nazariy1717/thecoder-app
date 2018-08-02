import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import styles from './styles/app.scss';
console.log(styles);

ReactDOM.render(<App />, document.getElementById('coder-app'));
registerServiceWorker();
