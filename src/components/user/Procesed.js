import React, { Component } from 'react';


export default class Procesed extends Component {
  render(){
    return (
        <div className="container">
 
        <h3 className="center">Order Status</h3>
        <ul className="stepper horizontal" style={{"min-height":"100px"}}>
        <li className="step active">
      <div className="step-title waves-effect">Procesed</div>
   </li>
   <li className="step">
      <div className="step-title waves-effect">Complete</div>
   </li>
   <li className="step ">
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
            
      <button className="waves-effect waves-light btn green lighten-1">Complete</button>
          </tr>
          <tr>
            <td>#AKB48</td>
            <td>Griya Fantasi, Lampung</td>
            <td>NAMA STUDIOS</td>
            
      <button className="waves-effect waves-light btn blue lighten-1">On Progress</button>
          </tr>
          <tr>
            <td>#SKE48</td>
            <td>Alam murni, Lampung</td>
            <td>NAMA</td>
            
      <button className="waves-effect waves-light btn red lighten-1">Cancel</button>
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