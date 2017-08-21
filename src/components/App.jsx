import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

const App = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
        </div>
    </BrowserRouter>
);

export default App;