import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/login";
import Friends from "../components/friends";
import PrivateRoute from "./privateRoute";

const Routes = () => {
  return (
    <>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={Friends} />
    </>
  );
};
export default Routes;
