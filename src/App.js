import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { bindActionCreators } from "redux";
import "./App.scss";
import Loading from "./components/Loading/Loading";
import Toast from "./components/Toast/Toast";
import PrivateRoute from "./hoc/PrivateRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Recipes from "./pages/Recipes/Recipes";
import Register from "./pages/Register/Register";
import { actions as toastActions } from "./reducers/toast";

function App({ openToast, severity, message, openLoading, closeMessage }) {
  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    closeMessage();
  };

  return (
    <Fragment>
      <CssBaseline />
      <Loading open={openLoading} />
      <Toast
        open={openToast}
        severity={severity}
        message={message}
        handleClose={handleToastClose}
      />
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

const mapStateToProps = (state) => ({
  openToast: state.toast.get("open"),
  openLoading: state.loader.get("open"),
  severity: state.toast.get("severity"),
  message: state.toast.get("message"),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(toastActions, dispatch),
});

App.propTypes = {
  openToast: PropTypes.bool,
  severity: PropTypes.string,
  message: PropTypes.string,
  openLoading: PropTypes.bool,
  closeMessage: PropTypes.func,
  closeLoader: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
