import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "../../Rating";
import { deleteProduct } from "../../../actions/admin/adminProductAction";
import { connect } from "react-redux";

const Products = ({ index, product, deleteProduct }) => {
  const { _id, title, images, sold, rating } = product;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <div className="text-nowrap">{title}</div>
      </td>
      <td>
        <div className="d-flex flex-nowrap">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Product"
              className="rounded mx-1"
              style={{ width: "32px", height: "32px" }}
            />
          ))}
        </div>
      </td>
      <td>{sold}</td>
      <td>
        <div className="d-flex flex-nowrap">
          <Rating value={rating} />
        </div>
      </td>
      <td>
        <div className="d-flex flex-nowrap">
          <Link
            to={`/admin/product/edit/${_id}`}
            className="btn btn-outline-warning btn-sm mx-1"
          >
            <i className="far fa-edit"></i>
          </Link>
          <button
            className="btn btn-outline-danger btn-sm mx-1"
            onClick={() => deleteProduct(_id)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

Products.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default connect(null, { deleteProduct })(Products);
