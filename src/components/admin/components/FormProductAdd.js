import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../../../actions/admin/adminProductAction";

const FormProductAdd = ({ loading, isSuccess, addProduct }) => {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);

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

  const reset = () => {
    const files = document.getElementById("files");
    setTitle("");
    setFiles([]);
    files.value = "";
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess]);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const images = Array.from(files);
    formData.append("title", title);
    images.map((image) => formData.append("images", image));

    addProduct(formData);
  };

  return (
    <form id="form" onSubmit={onSubmit}>
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

FormProductAdd.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminProduct.loading,
  isSuccess: state.adminProduct.isSuccess,
});

export default connect(mapStateToProps, { addProduct })(FormProductAdd);
