import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/authAction";

const FormLogin = ({ loading, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={onSubmit} className="login-form">
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">mail_outline</i>
          <input
            className="validate"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" data-error="wrong" data-success="right">
            Email
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">lock_outline</i>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button
            type="submit"
            disabled={loading}
            className="btn waves-effect waves-light col s12"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

FormLogin.propTypes = {
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login })(FormLogin);
