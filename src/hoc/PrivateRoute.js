import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useStateValue } from "../context/StateContext";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const [, dispatch] = useStateValue();
  const [authenticated, setAuthenticated] = useState(true);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      const user = await Auth.currentAuthenticatedUser();
      setIsAuthenticating(false);
      setAuthenticated(true);
      dispatch({ type: "session_authenticated", user });
    } catch (err) {
      setAuthenticated(false);
      setIsAuthenticating(false);
      console.log(err);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    !isAuthenticating && (
      <Route
        {...rest}
        render={props =>
          authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )
        }
      />
    )
  );
};

export default PrivateRoute;
