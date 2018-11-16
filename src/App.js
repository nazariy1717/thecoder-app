import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ThanksPage from './components/pages/ThanksPage/ThanksPage';
// import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';


const App = () => (
    <div className="coder-app">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/thanks" component={ThanksPage} />
            {/*<Route component={NotFoundPage} />*/}
        </Switch>
    </div>
);

export default App;
