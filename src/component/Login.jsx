import React, { Component } from "react";
import joi from "joi-browser";
import Input from "./input";

class Login extends Component {
  state = {
    accounts: {
      username: "",
      password: "",
    },
    error: {},
  };

  schema = {
    username: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  validate = () => {
    const { accounts } = this.state;
    const options = { abortEarly: false };
    const result = joi.validate(accounts, this.schema, options);
    console.log(result);
    if (!result.error) return null;

    const error = {};

    for (let item of result.error.details) {
      error[item.path[0]] = item.message;
    }
    return error;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const error = this.validate();
    console.log(error);
    this.setState({ error });
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value === "") return "Username is invaid";
    }
    if (name === "password") {
      if (value === "") return "password is invaid";
    }
  };

  handleChange = (event) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateProperty(event.currentTarget);

    if (errorMessage) error[event.currentTarget.name] = errorMessage;
    else delete error[event.currentTarget.name];

    const accounts = { ...this.state.accounts };
    accounts[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ accounts, error });
  };
  render() {
    const { accounts } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            name="username"
            value={accounts.username}
            onChange={this.handleChange}
            error={this.state.error.username}
          />
          <Input
            label="Password"
            name="password"
            value={accounts.password}
            onChange={this.handleChange}
            error={this.state.error.password}
          />

          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
