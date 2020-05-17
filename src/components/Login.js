import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FormLogin from "./FormLogin";

const Login = ({ loading, isSuccess, isAuthenticated }) => {
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : isSuccess ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h1>Login</h1>
      <FormLogin />
    </div>
  );
};

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isSuccess: state.auth.isSuccess,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Login);
