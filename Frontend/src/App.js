import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navbar";
import Movies from "./components/movie/movies";
import MovieForm from "./components/movie/movieForm";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/footer";

class App extends Component {
  state = {};

  async componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  renderNavbar() {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/register"
    )
      return null;
    return <NavBar user={this.state.user} />;
  }

  render() {
    const { user, movies } = this.state;
    return (
      <>
        <ToastContainer />
        {this.renderNavbar()}
        <main>
          <div className="content">
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <ProtectedRoute path="/movies/:_id" component={MovieForm} />
              <Route
                path="/movies"
                render={(props) => <Movies {...props} user={user} />}
              />
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/movies" />
              <Redirect to="not-found" />
            </Switch>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
