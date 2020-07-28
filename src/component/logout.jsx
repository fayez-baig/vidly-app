import { Component } from "react";
import * as userAuth from "../services/userAuth";

class Logout extends Component {
  componentDidMount() {
    userAuth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
