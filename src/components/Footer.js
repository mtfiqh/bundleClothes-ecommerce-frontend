import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto bg-dark py-3 text-white">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h5>Bundle Clothes</h5>
            <p>
              Bundle Clothes is an online store that sells clothes in a bundle.
            </p>
          </div>
          <div className="col-4">
            <h5>Knowledge</h5>
            <div className="row">
              <div className="col-12">
                <Link to="/orders" className="text-white">
                  My Order
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>&copy; 2020, Bundle Clothes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
