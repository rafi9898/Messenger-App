import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
