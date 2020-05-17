import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getCurrentUser } from "../actions/authAction";
import CircularProgressIndicator from "./CircularProgressIndicator";

const ProfileDropdown = ({
  loading,
  isSuccess,
  currentUser,
  logout,
  getCurrentUser,
}) => {
  const [name, setName] = useState("Unknown");

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
    }
  }, [currentUser]);

  return (
    <li className="nav-item dropdown">
      <button
        className="btn btn-dark dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {name}
      </button>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="navbarDropdown"
      >
        <Link className="dropdown-item" to="/changepassword">
          Change Password
        </Link>
        <div className="dropdown-divider"></div>
        {loading ? (
          <div className="text-center">
            <CircularProgressIndicator />
          </div>
        ) : (
          <button className="dropdown-item" onClick={() => logout()}>
            Logout
          </button>
        )}
      </div>
    </li>
  );
};

ProfileDropdown.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isSuccess: state.auth.isSuccess,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { logout, getCurrentUser })(
  ProfileDropdown
);
