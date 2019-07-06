import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import Chat from "./components/pages/Chat/Chat";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Chat} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
