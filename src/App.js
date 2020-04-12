import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import PrivateRoute from "./hoc/PrivateRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Recipes from "./pages/Recipes/Recipes";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/recipes" component={Recipes} />
            <PrivateRoute path="/" component={Home} exact />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
