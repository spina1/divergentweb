import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/barbers" className="nav-link">
                Barbers
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/book" className="nav-link">
                Book an Appointment
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
