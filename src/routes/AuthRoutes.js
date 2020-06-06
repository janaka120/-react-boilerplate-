import React from "react";
import {Route} from "react-router-dom";

import SignInComponent from '../features/Auth/containers/SignInContainer';
import SignupComponent from '../features/Auth/containers/SignupContainer';

const routes = [
  {
    path: '/login',
    component: SignInComponent,
  }, {
    path: '/signup',
    component: SignupComponent,
  },
];

const authRoutes = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);

export default authRoutes;