import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getProduct,
  updateProduct,
} from "../../../actions/admin/adminProductAction";
import { Redirect } from "react-router-dom";

const FormProductEdit = ({
  productId,
  loading,
  isSuccess,
  product,
  getProduct,
  updateProduct,
}) => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getProduct(productId);
  }, [productId, getProduct]);

  useEffect(() => {
    if (product) {
      const { title, images } = product;
      setTitle(title);
      setImages(images);
    }
  }, [product]);

  const PreviewImages = () => {
    return images.map((image, index) => (
      <img
        key={index}
        alt="Preview Images"
        src={image}
        className="img-thumbnail m-1"
        style={{ width: "128px", height: "128px" }}
      />
    ));
  };

  const PreviewFiles = () => {
    const images = Array.from(files);
    return images.map((image, index) => (
      <img
        key={index}
        alt="Preview Files"
        src={URL.createObjectURL(image)}
        className="img-thumbnail m-1"
        style={{ width: "128px", height: "128px" }}
      />
    ));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const images = Array.from(files);
    formData.append("title", title);
    images.map((image) => formData.append("images", image));

    updateProduct(productId, formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <PreviewImages />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-group">
        <PreviewFiles />
      </div>
      <div className="form-group">
        <label htmlFor="files">Images</label>
        <input
          type="file"
          className="form-control-file"
          id="files"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        />
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Submit
        </button>
      </div>
    </form>
  );
};

FormProductEdit.propTypes = {
  productId: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  product: PropTypes.object,
  getProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminProduct.loading,
  isSuccess: state.adminProduct.isSuccess,
  product: state.adminProduct.product,
});

export default connect(mapStateToProps, { getProduct, updateProduct })(
  FormProductEdit
);
