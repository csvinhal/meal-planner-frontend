import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import Amplify from "aws-amplify";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import { StateProvider } from "./context/StateContext";
import "./index.scss";
import loadingReducer from "./reducers/loading";
import { initialState, reducer } from "./reducers/stateContext";
import toastReducer from "./reducers/toast";
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

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_BASE_URL,
});

const rootReducer = combineReducers({
  toast: toastReducer,
  loader: loadingReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
