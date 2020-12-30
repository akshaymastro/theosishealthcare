import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./components/home";
import Admin from "./components/Admin";
import BlogContent from "./components/BlogContent";
import blogform from "./components/blogform";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/blogcontent" component={BlogContent} />
        <Route exact path="/createblog" component={blogform} />
      </Switch>

     
    </Router>
  );
}

export default App;
