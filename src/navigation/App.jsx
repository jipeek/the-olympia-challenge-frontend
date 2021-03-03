import React from 'react';
import { BrowserRouter, Switch,  Route, } from 'react-router-dom';

import HomeScreen from '../features/home/HomeScreen';
import Login from '../features/login/Login';
import OnboardingScreen from '../features/onboarding/OnboardingScreen';

const App =  () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={OnboardingScreen}/>
                <Route exact path="/home" component={HomeScreen}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;