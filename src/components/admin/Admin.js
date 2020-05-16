import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./Dashboard";
import Products from "./Products";
import ProductAdd from "./ProductAdd";
import ProductEdit from "./ProductEdit";

const Admin = () => {
  return (
    <Fragment>
      <Navbar />
      <main role="main" className="flex-shrink-0 container-fluid my-3">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-md-2 col-lg-2 my-3">
                <div
                  className="nav flex-column nav-pills text-center"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <Sidebar />
                </div>
              </div>
              <div className="col-md-9 my-3">
                <div className="tab-content" id="v-pills-tabContent">
                  <Switch>
                    <Route exact path="/admin" component={Dashboard} />
                    <Route exact path="/admin/products" component={Products} />
                    <Route exact path="/admin/product/add" component={ProductAdd} />
                    <Route exact path="/admin/product/edit/:productId" component={ProductEdit} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Admin;
