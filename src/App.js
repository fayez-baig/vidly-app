import React from "react";
import Movies from "./component/Movies";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Rental from "./component/common/Rentals";
import Customer from "./component/common/Customers";
import NotFound from "./component/common/NotFound";
import NavBar from "./component/common/NavBar";
import MovieForm from "./component/common/Movie-form";

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
          <Route path="/movies" component={Movies}></Route>
          <Redirect exact from="/" to="/movies"></Redirect>
          <Redirect to="/notfound"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
