import React, { Component } from "react";
import Input from "./input";

class Login extends Component {
  state = {
    accounts: {
      username: "",
      password: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.accounts);
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
          />
          <Input
            label="Password"
            name="password"
            value={accounts.password}
            onChange={this.handleChange}
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
