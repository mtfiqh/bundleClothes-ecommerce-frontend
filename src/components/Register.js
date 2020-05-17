import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FormRegister from "./FormRegister";

const Register = ({ loading, isSuccess, isAuthenticated }) => {
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : isSuccess ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <h1>Register</h1>
      <FormRegister />
    </div>
  );
};

Register.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isSuccess: state.auth.isSuccess,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Register);
