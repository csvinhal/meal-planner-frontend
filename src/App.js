import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header"></header>

        <main>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
