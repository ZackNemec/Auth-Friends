import React from "react";

import "./App.css";

import Login from "./components/login";
import Friends from "./components/friends";
import Routes from "./utils/Routes";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div>
        <h1>you need to login</h1>
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
      </div>
      <Routes>
        <Login />
        <Friends />
      </Routes>
    </div>
  );
}

export default App;
