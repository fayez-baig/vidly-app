import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    console.log("fix-nav bar-responsive-bug");
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Vidly
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">
              Rentals
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
