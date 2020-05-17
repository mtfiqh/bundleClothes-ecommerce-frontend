import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PrivateAdminRoute from "./PrivateAdminRoute";
import NotFound from "../components/NotFound";
import AdminLogin from "../components/admin/Login";
import AdminRegister from "../components/admin/Register";
import Admin from "../components/admin/Admin";
import AdminLogout from "../components/admin/Logout";
import AdminProductDelete from "../components/admin/ProductDelete";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Register from "../components/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/logout" component={Logout} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/admin/login" component={AdminLogin} />
      {/* <PrivateAdminRoute exact path="/admin/register" component={Register} /> */}
      <PrivateAdminRoute exact path="/admin" component={Admin} />
      <PrivateAdminRoute exact path="/admin/logout" component={AdminLogout} />
      <PrivateAdminRoute exact path="/admin/products" component={Admin} />
      <PrivateAdminRoute exact path="/admin/product/add" component={Admin} />
      <PrivateAdminRoute
        exact
        path="/admin/product/edit/:productId"
        component={Admin}
      />
      <PrivateAdminRoute
        exact
        path="/admin/product/delete/:productId"
        component={AdminProductDelete}
      />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default Routes;
