import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./component/Movies";
import Rental from "./component/common/Rentals";
import Customer from "./component/common/Customers";
import NotFound from "./component/common/NotFound";
import NavBar from "./component/common/NavBar";
import MovieForm from "./component/common/Movie-form";
import Login from "./component/Login";
import Register from "./component/common/Register";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

//vidly app

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container mt-4">
        <Switch>
          <Route path="/movie-form/:id" component={MovieForm}></Route>
          <Route path="/rentals" component={Rental}></Route>
          <Route path="/customers" component={Customer}></Route>
          <Route path="/notfound" component={NotFound}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/movie/new" component={Register}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Redirect exact from="/" to="/movies"></Redirect>
          <Redirect to="/notfound"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
