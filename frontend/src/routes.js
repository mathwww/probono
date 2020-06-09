import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import ListProcesses from './pages/ListProcesses';
import NewProcess from './pages/NewProcess';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Login}/>
                <Route path="/processes" exact component={ListProcesses}></Route>
                <Route path="/processes/new" exact component={NewProcess}></Route>
            </Switch>
        </BrowserRouter>
    );
}