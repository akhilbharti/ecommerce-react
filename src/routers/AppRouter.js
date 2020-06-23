import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';


import * as ROUTES from 'constants/routes';

// Admin components
// to be added on next update

import Dashboard from 'views/admin/dashboard';
import Products from 'views/admin/products';
import EditProduct from 'views/admin/edit_product';
import AddProduct from 'views/admin/add_product';

import ProductSearch from 'components/product/ProductSearch';
import SignUp from 'views/auth/signup';
import SignIn from 'views/auth/signin';
import ForgotPassword from 'views/auth/forgot_password';
import Home from 'views/home';
import CheckOutStep1 from 'views/checkout/step1';

import PageNotFound from 'views/error/PageNotFound';
import ScrollToTop from 'components/ui/ScrollToTop';
import AdminRoute from './AdminRoute';
import PublicRoute from './PublicRoute';
import ClientRoute from './ClientRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
        <Route
            component={ScrollToTop(ProductSearch)}
            exact
            path={ROUTES.SEARCH}
        />
        <PublicRoute
            component={Home}
            exact
            path={ROUTES.HOME}
        />
        <PublicRoute
            component={ScrollToTop(SignUp)}
            path={ROUTES.SIGNUP}
        />
        <PublicRoute
            component={ScrollToTop(SignIn)}
            path={ROUTES.SIGNIN}
        />
        <PublicRoute
            component={ScrollToTop(ForgotPassword)}
            path={ROUTES.FORGOT_PASSWORD}
        />
       
        <ClientRoute
            component={ScrollToTop(CheckOutStep1)}
            path={ROUTES.CHECKOUT_STEP_1}
        />
        
        <AdminRoute
            component={ScrollToTop(Dashboard)}
            exact
            path={ROUTES.ADMIN_DASHBOARD}
        />
        <AdminRoute
            component={ScrollToTop(Products)}
            path={ROUTES.ADMIN_PRODUCTS}
        />
        <AdminRoute
            component={ScrollToTop(AddProduct)}
            path={ROUTES.ADD_PRODUCT}
        />
        <AdminRoute
            component={ScrollToTop(EditProduct)}
            path={`${ROUTES.EDIT_PRODUCT}/:id`}
        />
        <PublicRoute component={ScrollToTop(PageNotFound)} />
    </Switch>
  </Router>
);

export default AppRouter;
