import React from 'react';
import { BrowserRouter, Switch,  Route, } from 'react-router-dom';

import HomeScreen from '../features/home/HomeScreen';
import Login from '../features/login/Login';

const App =  () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;