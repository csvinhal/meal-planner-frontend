import { Auth } from "aws-amplify";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { toastMutations } from "../apollo/operations/mutations/toast";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isValidSession, setIsValidSession] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    Auth.currentSession()
      .then((session) => {
        setIsValidSession(session.isValid());
        setIsAuthenticating(false);
      })
      .catch((err) => {
        const { openToast } = toastMutations;
        const { message } = err;
        openToast(message, "error");
        setIsAuthenticating(false);
      })
  }, []);
  return (
    !isAuthenticating && (
      <Route
        {...rest}
        render={(props) =>
          isValidSession ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
        }
      />
    )
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
