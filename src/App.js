import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
import Dialog from "./components/DeleteDialog/DeleteDialog";
import Loading from "./components/Loading/Loading";
import Toast from "./components/Toast/Toast";
import PrivateRoute from "./hoc/PrivateRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MealsPlan from "./pages/MealsPlan/MealsPlan";
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Loading />
      <Toast />
      <Dialog />
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
                    <PrivateRoute path="/meals-plan" component={MealsPlan} />
                    <PrivateRoute path="/" component={Home} exact />
                    <Redirect to="/" />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
