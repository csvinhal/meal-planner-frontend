import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute path="/recipes" component={Recipes} />
                    <PrivateRoute path="/" component={Home} exact />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
