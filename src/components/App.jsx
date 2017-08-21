import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

const App = () => (
    <HashRouter>
        <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
        </div>
    </HashRouter>
);

export default App;