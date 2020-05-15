import React from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/admin">
          PWL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <ProfileDropdown />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
