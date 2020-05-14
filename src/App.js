import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import About from "./components/about.component";
import Services from "./components/services.component";
import Barbers from "./components/barbers.component";
import Signup from "./components/signup.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/barbers" component={Barbers} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
