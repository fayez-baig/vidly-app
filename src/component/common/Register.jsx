import React from "react";
import Form from "./Form";
import joi from "joi-browser";

import { ToastContainer, toast } from "react-toastify";
import * as userService from "./../../services/userService";
import * as userAuth from "./../../services/userAuth";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";

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

  doSubmit = async () => {
    try {
      const { headers } = await userService.Register(this.state.data);
      userAuth.loginWithJwt(headers["x-auth-token"]);
      toast("Registered Successfully");
      setTimeout(() => (window.location = "/"), 1000);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("User already Registered");
      }
    }
  };
  render() {
    if (userAuth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="container">
        <ToastContainer />
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
