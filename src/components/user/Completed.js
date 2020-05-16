import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Complete extends Component {
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
          <li className="step active">
            <div className="step-title waves-effect">Complete</div>
          </li>
          <li className="step ">
            <Link to="/Review" className="step-title waves-effect">
              Review
            </Link>
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
                      <font color="green accent-3">Complete</font>
                    </td>
                  </tr>
                  <tr>
                    <td>#AKB48</td>
                    <td>Griya Fantasi, Lampung</td>
                    <td>NAMA STUDIOS</td>
                    <td>
                      <font color="green accent-3">Complete</font>
                    </td>
                  </tr>
                  <tr>
                    <td>#SKE48</td>
                    <td>Alam murni, Lampung</td>
                    <td>NAMA</td>
                    <td>
                      <font color="green accent-3">Complete</font>
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
