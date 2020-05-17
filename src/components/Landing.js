import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default Landing;
