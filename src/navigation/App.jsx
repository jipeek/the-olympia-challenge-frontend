import React from 'react';
import { BrowserRouter, Switch,  Route, } from 'react-router-dom';

import HomeScreen from '../features/home/HomeScreen';
import Login from '../features/login/Login';
import Signup from '../features/login/Signup';
import SignupHobbies from '../features/Signup/SignupHobbies';
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
import Cart from '../features/cart/Cart';
import CheckoutAddress from '../features/checkoutAddress/CheckoutAddress';
import CheckoutPayment from '../features/checkoutPayment/CheckoutPayment';
import CheckoutConfirm from '../features/checkoutAddress/checkoutConfirm/CheckoutConfirm';
import Search from '../features/search/Search';
import AccountNotifications from '../features/accountNotifications/AccountNotifications';
import SearchResults from '../features/searchResults/SearchResults';
import SearchFilters from '../features/searchFilters/SearchFilters';

const App =  () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={OnboardingScreen}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/login/preferences" component={PreferencesAccount} />
                <Route exact path="/account-likes" component={Accountlikes}/>
                <Route exact path="/categories" component={Categories}/>
                <Route exact path="/account" component={AccountScreen}/>
                <Route exact path="/account/notifications" component={AccountNotifications} />
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/purchases" component={PurchaseScreen}/>
                <Route exact path="/purchaseDetail" component={PurchaseDetailScreen}/>
                <Route exact path="/trackpurchase" component={TrackPurchaseScreen}/>
                <Route exact path="/home" component={HomeScreen}/>
                <Route exact path="/language" component={languageScreen} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signup/hobbies" component={SignupHobbies} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout/address" component={CheckoutAddress} />
                <Route exact path="/checkout/payment" component={CheckoutPayment} />
                <Route exact path="/checkout/confirm" component={CheckoutConfirm} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/search/results" component={SearchResults} />
                <Route exact path="/search/filters" component={SearchFilters} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;