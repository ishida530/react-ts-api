import * as React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import BasketPage from '../Pages/BasketPage'
import ContactPage from '../Pages/ContactPage'
import HomePage from '../Pages/HomePage';
import ProductsList from '../Pages/ProductsList'


const ContentPage: React.FunctionComponent<{}> = (props) => {
    return (

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={ProductsList} />
            <Route path="/product/:id" component={ProductsList} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/basket" component={BasketPage} />

            <Route render={() => (
                <h1>Strona nie istnieje</h1>
            )} />
        </Switch>
    );
};

export default ContentPage;
