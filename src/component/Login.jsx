import React, { Component } from "react";
import Input from "./input";

class Login extends Component {
  state = {
    accounts: {
      username: "",
      password: "",
    },
    error: {},
  };
  validate = () => {
    const { accounts } = this.state;
    const error = {};
    if (accounts.username === "") error.username = "Username is Required";
    if (accounts.password === "") error.password = "Password is Required";
    console.log(error);
    return Object.keys(error).length === 0 ? {} : error;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const error = this.validate();
    console.log(error);
    this.setState({ error });
  };

  handleChange = (event) => {
    const accounts = { ...this.state.accounts };
    accounts[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ accounts });
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
