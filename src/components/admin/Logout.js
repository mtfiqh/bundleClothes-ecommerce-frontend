import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/admin/adminAuthAction";
import CircularProgressIndicator from "../CircularProgressIndicator";
import { Redirect } from "react-router-dom";

const Logout = ({ loading, isSuccess, logout }) => {
  useEffect(() => {
    logout();
  }, [logout]);
  return (
    <Fragment>
      {loading ? (
        <CircularProgressIndicator />
      ) : isSuccess ? (
        <Redirect to="/admin/login" />
      ) : (
        <Redirect to="/admin" />
      )}
    </Fragment>
  );
};

Logout.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminAuth.loading,
  isSuccess: state.adminAuth.isSuccess,
});

export default connect(mapStateToProps, { logout })(Logout);
