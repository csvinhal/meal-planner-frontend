import { ApolloProvider } from "@apollo/client";
import Amplify from "aws-amplify";
import React from "react";
import ReactDOM from "react-dom";
import { client } from "./apollo/config/client";
import App from "./App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: process.env.REACT_APP_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN,
      scope: process.env.REACT_APP_COGNITO_SCOPE,
      redirectSignIn: process.env.REACT_APP_COGNITO_REDIRECT_SIGN_IN,
      redirectSignOut: process.env.REACT_APP_COGNITO_REDIRECT_SIGN_OUT,
      responseType: process.env.REACT_APP_COGNITO_RESPONSE_TYPE,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
