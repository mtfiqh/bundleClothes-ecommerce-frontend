import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Review extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center">Order Status</h3>
        <ul className="stepper horizontal" style={{ "min-height": "100px" }}>
          <li className="step">
            <Link to="/Procesed" className="step-title waves-effect">
              Procesed
            </Link>
          </li>
          <li className="step ">
            <Link to="/Complete" className="step-title waves-effect">
              Complete
            </Link>
          </li>
          <li className="step active">
            <div className="step-title waves-effect">Review</div>
          </li>
        </ul>
        <div className="col s12 z-depth-6 card-panel">
          <form className="col s12">
            <div className="row">
              <table className="responsive-table">
                <thead>
                  <tr>
                    <th>Invoice No</th>
                    <th>Address</th>
                    <th>Items</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#JKT48</td>
                    <td>Pegangsaan Timur, Jakarta</td>
                    <td>NAMA BACKPACK</td>
                    <td>
                      <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#AKB48</td>
                    <td>Griya Fantasi, Lampung</td>
                    <td>NAMA STUDIOS</td>
                    <td>
                      <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>#SKE48</td>
                    <td>Alam murni, Lampung</td>
                    <td>NAMA</td>
                    <td>
                      <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
