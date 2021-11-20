import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { Component } from "react";
const User = React.lazy(() => import("./user/UserScreen.js"));
const Admin = React.lazy(() => import("./admin/AdminScreen.js"));

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <React.Suspense fallback={<div>Loading....</div>}>
            <Route exact path="/" component={User} />
            <Route exact path="/admin" component={Admin} />
          </React.Suspense>
        </Switch>
      </Router>
    );
  }
}

export default App;
