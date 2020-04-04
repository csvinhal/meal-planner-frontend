import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import PrivateRoute from "./hoc/PrivateRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Receipts from "./pages/Receipts/Receipts";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" component={Home} exact />
          <PrivateRoute path="/receipts" component={Receipts} exact />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
