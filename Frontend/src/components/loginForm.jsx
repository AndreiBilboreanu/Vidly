import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import SocialMedia from "./socialMedia";
import Form from "./common/form";
import auth from "../services/authService";
import "../css/loging.css";
import "../css/logingRegister.css";
class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
    console.log("Submitted");
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="pageContainer">
        <div className="loginContainer">
          <div className="notRegister">
            <a>Not a member? Signup!</a>
          </div>
          <div className="formContainer">
            <h1>Welcome!</h1>
            <h3>Login in to your account</h3>
            <form onSubmit={this.handleSubmit}>
              {this.rederInput("username", "Username")}
              {this.rederInput("password", "Password", "password")}
              <div className="forgetPassword">
                <a>Forget password?</a>
              </div>
              {this.renderButton("Login")}
            </form>
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
