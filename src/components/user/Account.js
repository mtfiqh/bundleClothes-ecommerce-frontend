import React, { Component } from "react";
import item1 from "../../images/item1.jpg";
import { Link } from "react-router-dom";

export default class Account extends Component {
  componentDidMount(){
    document.title = "Setting | Account"
  }
  render() {
    return (
      <div className="container">
        <h3 className="center">Settings</h3>
        <ul className="stepper horizontal" style={{ minHeight: "100px" }}>
          <li className="step active">
            <div className="step-title waves-effect">Account</div>
          </li>
          <li className="step">
            <Link to="/AddressForm" className="step-title waves-effect">
              Delivery Address
            </Link>
          </li>
        </ul>
        <div className="col s12 z-depth-6 card-panel">
          <form className="col s12">
            <div className="row">
              <div className="col s4">
                <div className="container">
                  <table className="responsive-table centered">
                    <tbody>
                      <tr>
                        <td>
                          <div className="card-image">
                            <img
                              src={item1}
                              style={{
                                height: "200px",
                                width: "200px",
                                borderRadius: "64px",
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="material-icons left">cloud_upload</i>
                          Browse
                          <input type="file" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Maximum file size: 5MB.
                          <br />
                          Allowed extension: .PNG .JPG .JPEG
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col s8">
                <div className="container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Biodata</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>iCanCan</td>
                        <td>
                          <a href="#!">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date</td>
                        <td>Metro, 05 February 2000</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Sex</td>
                        <td>Jantan</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Contact</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Email</td>
                        <td>icancan@gmail.com</td>
                        <td>
                          <a href="#!">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>082282222222</td>
                        <td>
                          <a href="#!">Edit</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
