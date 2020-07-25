import React, { Component } from "react";
import joi from "joi-browser";
import Input from "../input";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };
  validate = () => {
    const { data } = this.state;
    const options = { abortEarly: false };
    const { error } = joi.validate(data, this.schema, options);
    console.log(error);
    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const error = this.validate();
    console.log(error);
    this.setState({ error: error || {} });

    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = (event) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateProperty(event.currentTarget);

    if (errorMessage) error[event.currentTarget.name] = errorMessage;
    else delete error[event.currentTarget.name];

    const data = { ...this.state.data };
    data[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ data, error });
  };

  renderButton = (label) => {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, error } = this.state;
    return (
      <Input
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
        type={type}
      />
    );
  };
}

export default Form;
