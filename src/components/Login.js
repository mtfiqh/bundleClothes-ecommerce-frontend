import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import FormLogin from "./FormLogin";
import CircularProgressIndicator from "./CircularProgressIndicator";
import SuccessIcon from "./SuccessIcon";
import FailedIcon from "./FailedIcon";

const Login = ({ loading, isSuccess, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <div className="row align-items-center m-3">
          <div className="col-md-6 col-lg-4 mx-auto">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-center mb-3">
                  Login{" "}
                  {loading ? (
                    <CircularProgressIndicator />
                  ) : isSuccess ? (
                    <SuccessIcon />
                  ) : (
                    <FailedIcon />
                  )}
                </h5>
                <FormLogin />
                <div className="mt-5">
                  Doesn't have account yet?{" "}
                  <Link to="/register">Register here</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
