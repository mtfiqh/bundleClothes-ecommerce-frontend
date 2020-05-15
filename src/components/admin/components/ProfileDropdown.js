import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signOut } from "../../../actions/admin/adminAuthAction";

const ProfileDropdown = ({ signOut }) => {
  return (
    <li className="nav-item dropdown">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Admin
      </button>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuButton"
      >
        <button className="dropdown-item" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    </li>
  );
};

ProfileDropdown.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default connect(null, { signOut })(ProfileDropdown);
