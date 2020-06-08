import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import ListProcesses from './pages/ListProcesses';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Login}/>
                <Route path="/ListProcesses" exact component={ListProcesses}></Route>
            </Switch>
        </BrowserRouter>
    );
}