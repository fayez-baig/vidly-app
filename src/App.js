import React from "react";
import Movies from "./component/Movies";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Container from "react-bootstrap/Container";
import "./App.css";
//vidly app

function App() {
  return (
    <Container>
      <Movies />
    </Container>
  );
}

export default App;
