import React from "react";
import joi from "joi-browser";
import Form from "./common/Form";

class Login extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    error: {},
  };

  schema = {
    username: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default Login;
