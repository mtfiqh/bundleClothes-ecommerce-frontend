import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddressForm extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center">Settings</h3>
        <ul className="stepper horizontal" style={{ "min-height": "100px" }}>
          <li className="step">
            <Link to="/Account" className="step-title waves-effect">
              Account
            </Link>
          </li>
          <li className="step active">
            <div className="step-title waves-effect">Delivery Address</div>
          </li>
        </ul>
        <div className="col s12 z-depth-6 card-panel">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="recipient" type="text" className="validate" />
                <label
                  htmlFor="recipient"
                  data-error="wrong"
                  data-success="right"
                >
                  Recipient
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="address_line1" type="text" className="validate" />
                <label
                  htmlFor="address_line1"
                  data-error="wrong"
                  data-success="right"
                >
                  Address
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="postal_code" type="text" className="validate" />
                <label
                  htmlFor="postal_code"
                  data-error="wrong"
                  data-success="right"
                >
                  Postal Code
                </label>
              </div>
              <div className="input-field col s6">
                <input id="phone_number" type="text" className="validate" />
                <label htmlFor="phone_number">Phone Number</label>
              </div>
            </div>

            <button class="waves-effect waves-light btn">Save</button>
          </form>
        </div>

        <div className="col s12 z-depth-6 card-panel">
          <form className="col s12">
            <div className="row">
              <table className="responsive-table centered">
                <thead>
                  <tr>
                    <th>Recipient</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Postal Code</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#JKT48</td>
                    <td>082282029999</td>
                    <td>Pegangsaan Timur, Jakarta</td>
                    <td>34165</td>
                    <td>
                      <a href="#!">
                        <i class="material-icons prefix small">create</i>
                      </a>
                    </td>
                    <td>
                      <a href="#!">
                        <i class="material-icons prefix small">delete</i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>#AKB48</td>
                    <td>082282029977</td>
                    <td>Griya Fantasi, Lampung</td>
                    <td>34163</td>
                    <td>
                      <a href="#!">
                        <i class="material-icons prefix small">create</i>
                      </a>
                    </td>
                    <td>
                      <a href="#!">
                        <i class="material-icons prefix small">delete</i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>#SKE48</td>
                    <td>082282029988</td>
                    <td>Alam murni, Lampung</td>
                    <td>34164</td>
                    <td>
                      <a href="#!">
                        <i class="material-icons prefix small">create</i>
                      </a>
                    </td>
                    <td>
                      <a href="#!">
                        <i class="material-icons prefix small">delete</i>
                      </a>
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
