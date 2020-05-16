import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import TableProducts from "./components/TableProducts";

const Products = () => {
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="text-dark">Products</h1>
        <Link to={`/admin/product/add`} className="btn btn-primary btn-sm">
          <i className="fas fa-plus"></i>
        </Link>
      </div>
      <TableProducts />
    </Fragment>
  );
};

export default Products;
