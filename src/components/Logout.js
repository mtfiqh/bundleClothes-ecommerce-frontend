import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../actions/authAction";
import CircularProgressIndicator from "./CircularProgressIndicator";

const Logout = ({ loading, isSuccess, logout }) => {
  useEffect(() => {
    logout();
  }, [logout]);

  return loading ? (
    <div className="row align-items-center h-100 mx-3">
      <div className="col-md-6 col-lg-4 col-xl-3 mx-auto">
        <h1 className="text-center text-dark">
          <CircularProgressIndicator />
        </h1>
      </div>
    </div>
  ) : isSuccess ? (
    <Redirect to="/login" />
  ) : (
    <Redirect to="/" />
  );
};

Logout.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isSuccess: state.auth.isSuccess,
});

export default connect(mapStateToProps, { logout })(Logout);
