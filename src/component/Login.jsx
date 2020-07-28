import React from "react";
import joi from "joi-browser";
import Form from "./common/Form";
import { login, getCurrentUser } from "./../services/userAuth";
import { ToastContainer, toast } from "react-toastify";
import { Redirect } from "react-router-dom";

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

  doSubmit = async () => {
    try {
      const { data } = this.state;

      await login(data.username, data.password);
      toast.success("Login  Successfully");

      const { state } = this.props.location;
      setTimeout(
        () => (window.location = state ? state.from.pathname : "/"),
        1000
      );
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid Username or Password");
      }
    }
  };
  render() {
    if (getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="container">
        <ToastContainer />
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
