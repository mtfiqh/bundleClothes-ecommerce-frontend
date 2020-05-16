import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../../actions/admin/adminProductAction";
import Product from "./Product";
import CircularProgressIndicator from "../../CircularProgressIndicator";

const TableProducts = ({ loading, isSuccess, products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="table-responsive">
      <table className="table table-hover shadow-sm text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Images</th>
            <th scope="col">Sold</th>
            <th scope="col">Rating</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="6">
                <h4>
                  <CircularProgressIndicator />
                </h4>
              </td>
            </tr>
          ) : isSuccess ? (
            products.map((product, index) => (
              <Product key={index} index={index} product={product} />
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <h4>Empty</h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

TableProducts.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminProduct.loading,
  isSuccess: state.adminProduct.isSuccess,
  products: state.adminProduct.products,
});

export default connect(mapStateToProps, { getProducts })(TableProducts);
