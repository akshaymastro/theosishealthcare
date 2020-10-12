import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/home";
function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Home} />
      {/* <Switch>
      <Route path="/work" component={Work} />
      <Route path="/projects" component={Project} />
      <Route path="/dashboard" component={Dashboard} />


      </Switch> */}
    </Router>
  );
}

export default App;
