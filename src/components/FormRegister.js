import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../actions/authAction";

const FormRegister = ({ loading, register }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">perm_identity</i>
          <input
            className="validate"
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label for="name" data-error="wrong" data-success="right">
            Nama
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">mail_outline</i>
          <input
            className="validate"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email" data-error="wrong" data-success="right">
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
          <label for="password">Password</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button
            type="submit"
            className="btn waves-effect waves-light col s12"
            disabled={loading}
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

FormRegister.propTypes = {
  loading: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { register })(FormRegister);
