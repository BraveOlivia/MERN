import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import NewPlace from "./places/pages/NewPlaces";
import User from "./user/pages/User";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/place/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
