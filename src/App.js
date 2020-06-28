import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
import Loading from "./components/Loading/Loading";
import Toast from "./components/Toast/Toast";
import PrivateRoute from "./hoc/PrivateRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Recipes from "./pages/Recipes/Recipes";
import Register from "./pages/Register/Register";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Loading />
        <Toast />
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
      </ThemeProvider>
    </Fragment>
  );
}

App.propTypes = {};

export default App;
