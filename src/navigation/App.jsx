import React from 'react';
import { BrowserRouter, Switch,  Route, } from 'react-router-dom';

import HomeScreen from '../features/home/HomeScreen';
import Login from '../features/login/Login';
import OnboardingScreen from '../features/onboarding/OnboardingScreen';
import PreferencesAccount from '../features/preferencesAccount/PreferencesAccount';
import Categories from '../features/categories/Categories';
import AccountScreen from '../features/account/AccountScreen';
import Profile from '../features/account/Profile';
import PurchaseScreen from '../features/purchase/PurchaseScreen';
import PurchaseDetailScreen from '../features/purchase/PurchaseDetailScreen';
import TrackPurchaseScreen from '../features/purchase/TrackPurchaseScreen';

const App =  () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={OnboardingScreen}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/preferences" component={PreferencesAccount}/>
                <Route exact path="/categories" component={Categories}/>
                <Route exact path="/account" component={AccountScreen}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/purchases" component={PurchaseScreen}/>
                <Route exact path="/purchaseDetail" component={PurchaseDetailScreen}/>
                <Route exact path="/trackpurchase" component={TrackPurchaseScreen}/>
                <Route exact path="/home" component={HomeScreen}/>

                
            </Switch>
        </BrowserRouter>
    )
}

export default App;