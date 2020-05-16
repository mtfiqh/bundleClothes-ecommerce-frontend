import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentAdmin } from "../../../actions/admin/adminAuthAction";
import CircularProgressIndicator from "../../CircularProgressIndicator";

const ProfileDropdown = ({
  loading,
  isSuccess,
  currentAdmin,
  getCurrentAdmin,
}) => {
  const { name } = currentAdmin;

  useEffect(() => {
    getCurrentAdmin();
  }, [getCurrentAdmin]);

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
        {loading ? <CircularProgressIndicator /> : isSuccess ? name : "Unknown"}
      </button>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuButton"
      >
        <Link to="/admin/logout" className="dropdown-item">
          Logout
        </Link>
      </div>
    </li>
  );
};

ProfileDropdown.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  currentAdmin: PropTypes.object.isRequired,
  getCurrentAdmin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminAuth.loading,
  isSuccess: state.adminAuth.isSuccess,
  currentAdmin: state.adminAuth.currentAdmin,
});

export default connect(mapStateToProps, { getCurrentAdmin })(ProfileDropdown);
