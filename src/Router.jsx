import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, SignIn, SignUp, Reset } from './templates/index';
import Auth from './Auth.jsx'

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={Reset} />

      <Auth>
        <Route exact path={"(/)?"} component={Home} />
      </Auth>
    </Switch>
  )
};

export default Router