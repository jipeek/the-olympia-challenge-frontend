import React from 'react';
import { BrowserRouter, Switch,  Route, } from 'react-router-dom';

import HomeScreen from '../features/home/HomeScreen';
import Login from '../features/login/Login';
import Signup from '../features/login/Signup';
import OnboardingScreen from '../features/onboarding/OnboardingScreen';
import PreferencesAccount from '../features/preferencesAccount/PreferencesAccount';
import Accountlikes from '../features/Accountlikes/Accountlikes';
import Categories from '../features/categories/Categories';
import AccountScreen from '../features/account/AccountScreen';
import Profile from '../features/account/Profile';
import PurchaseScreen from '../features/purchase/PurchaseScreen';
import PurchaseDetailScreen from '../features/purchase/PurchaseDetailScreen';
import TrackPurchaseScreen from '../features/purchase/TrackPurchaseScreen';
import languageScreen from '../features/language/LanguageScreen';

const App =  () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={OnboardingScreen}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/preferences" component={PreferencesAccount}/>
                <Route exact path="/account-likes" component={Accountlikes}/>
                <Route exact path="/categories" component={Categories}/>
                <Route exact path="/account" component={AccountScreen}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/purchases" component={PurchaseScreen}/>
                <Route exact path="/purchaseDetail" component={PurchaseDetailScreen}/>
                <Route exact path="/trackpurchase" component={TrackPurchaseScreen}/>
                <Route exact path="/home" component={HomeScreen}/>
                <Route exact path="/language" component={languageScreen} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;