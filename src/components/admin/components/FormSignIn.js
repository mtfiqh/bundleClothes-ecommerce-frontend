import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signIn } from "../../../actions/admin/adminAuthAction";

const FormSignIn = ({ signIn }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn(username, password);
      }}
    >
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
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </div>
    </form>
  );
};

FormSignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};

export default connect(null, { signIn })(FormSignIn);
