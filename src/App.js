import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { useStateValue } from "./context/StateContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  const [, dispatch] = useStateValue();
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      const user = await Auth.currentAuthenticatedUser();
      setIsAuthenticating(false);
      dispatch({ type: "session_authenticated", user });
    } catch (err) {
      setIsAuthenticating(false);
      console.log(err);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);
  return (
    !isAuthenticating && (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    )
  );
}

export default App;
