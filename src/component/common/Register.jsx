import React from "react";
import Form from "./Form";
import joi from "joi-browser";

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    error: {},
  };
  schema = {
    username: joi.string().email().required().label("Username"),
    password: joi.string().min(5).required().label("Password"),
    name: joi.string().required().label("Name"),
  };
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
