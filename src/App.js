import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './pages/Dashboard'
import { Goodbye } from "./pages/Goodbye";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" >
          <Dashboard/>
        </Route>

        <Route path="/goodbye" >
          <Goodbye/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
