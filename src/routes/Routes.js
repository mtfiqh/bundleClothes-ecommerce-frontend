import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateAdminRoute from "./PrivateAdminRoute";
import NotFound from "../components/NotFound";
import SignIn from "../components/admin/SignIn";
import Admin from "../components/admin/Admin";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/admin/login" component={SignIn} />
      <PrivateAdminRoute exact path="/admin" component={Admin} />
      <PrivateAdminRoute exact path="/admin/products" component={Admin} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default Routes;
