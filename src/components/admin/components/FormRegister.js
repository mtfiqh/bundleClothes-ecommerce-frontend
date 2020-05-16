import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../../actions/admin/adminAuthAction";

const FormRegister = ({ loading, register }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        register(username, password);
      }}
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          placeholder="Name"
          onChange={({ target: { value } }) => setName(value)}
          value={name}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="username"
          id="username"
          placeholder="Username"
          onChange={({ target: { value } }) => setUsername(value)}
          value={username}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="Password"
          onChange={({ target: { value } }) => setPassword(value)}
          value={password}
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
  loading: state.adminAuth.loading,
});

export default connect(mapStateToProps, { register })(FormRegister);
