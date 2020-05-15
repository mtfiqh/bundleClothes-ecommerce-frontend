import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <NavLink className="nav-link" exact to="/admin">
        Dashboard
      </NavLink>
      <NavLink className="nav-link" exact to="/admin/products">
        Products
      </NavLink>
    </Fragment>
  );
};

export default Sidebar;
