import React from "react";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
import SocialMedia from "./socialMedia";
import * as userService from "../services/userService";
import auth from "../services/authService";
import "../css/logingRegister.css";
import "../css/register.css";
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

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.header["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
    console.log("Submitted!");
  };

  render() {
    return (
      <div className="pageContainer">
        <div className="loginContainer">
          <div className="notRegister">
            <span>Already a member? </span>
            <Link to="/login">Login!</Link>
          </div>
          <div className="formContainer">
            <h1>Welcome!</h1>
            <h3>Your journey starts here</h3>
            <form onSubmit={this.handleSubmit}>
              {this.rederInput("username", "Username")}
              {this.rederInput("password", "Password", "password")}
              {this.rederInput("name", "Name")}
              {this.renderButton("Create account")}
            </form>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
