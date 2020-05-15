import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FormSignIn from "./components/FormSignIn";

const SignIn = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="row align-items-center h-100">
      <div className="col-md-6 mx-auto">
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title text-center mb-3">Admin Sign In</h5>
            <FormSignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.adminAuth.isAuthenticated,
});

export default connect(mapStateToProps)(SignIn);
