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
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Register
        </button>
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
