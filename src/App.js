import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainNavigation from "./shared/components/Menu/MainNavigation";
import NewPlace from "./places/pages/NewPlaces";
import User from "./user/pages/User";
import UserPlaces from "./places/pages/UserPlaces";

export default function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>
          <Route path="/:uID/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/place/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}
