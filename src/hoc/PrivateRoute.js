import { Auth } from "aws-amplify";
import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Axios from "../shared/requestsConfig";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useMemo(async () => {
    try {
      const session = await Auth.currentSession();
      if (session.isValid()) {
        Axios.defaults.headers.common["Authorization"] = `Bearer ${
          session.getIdToken().jwtToken
        }`;
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setIsAuthenticating(false);
    } catch (err) {
      setAuthenticated(false);
      setIsAuthenticating(false);
    }
  }, []);

  if (isAuthenticating) {
    return <Loading open={true} />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
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
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default PrivateRoute;
