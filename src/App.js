import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./component/Movies";
import Rental from "./component/common/Rentals";
import Customer from "./component/common/Customers";
import NotFound from "./component/common/NotFound";
import NavBar from "./component/common/NavBar";
import MovieForm from "./component/common/Movie-form";
import Login from "./component/Login";
import Logout from "./component/logout";
import Register from "./component/common/Register";
import * as userAuth from "./services/userAuth";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import ProtectedRoute from "./component/common/ProtectedRoute";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = userAuth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className="container mt-4">
          <Switch>
            <Route path="/rentals" component={Rental}></Route>
            <Route path="/customers" component={Customer}></Route>
            <Route path="/notfound" component={NotFound}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/logout" component={Logout}></Route>
            <ProtectedRoute path="/movie-form/:id" component={MovieForm} />
            <Route
              exact
              path="/movies"
              render={(props) => <Movies {...props} user={user} />}
            ></Route>
            <Redirect exact from="/" to="/movies"></Redirect>
            <Redirect to="/notfound"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
