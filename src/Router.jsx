import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, SignIn, SignUp, Reset, ProductEdit } from './templates/index';
import Auth from './Auth.jsx'

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={Reset} />

      <Auth>
        <Route exact path={"(/)?"} component={Home} />
        <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
      </Auth>
    </Switch>
  )
};

export default Router