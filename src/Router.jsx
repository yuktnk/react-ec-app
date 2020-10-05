import React from 'react';
import { Route, Switch } from 'react-router';
import {  Home, SignIn, SignUp } from './templates/index';

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  )
};

export default Router