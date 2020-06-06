import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from '../components/medium/Nav/Nav';
import HomeComponent from '../features/app/Containers/AppContainer';
import AboutComponent from '../features/About/Containers/AboutContainer';
import AuthRoutes from './AuthRoutes';

export default function AppRouter() {
  return (
      <Router>
          <div>
            <Nav />
            <Switch>
              <Route path='/' exact component={HomeComponent} />
              <Route path='/about' component={AboutComponent} />
              {AuthRoutes}
            </Switch>
          </div>
      </Router>
  );
}
