import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Submitted!");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.rederInput("username", "Username")}
          {this.rederInput("password", "Password", "password")}
          {this.rederInput("name", "name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
