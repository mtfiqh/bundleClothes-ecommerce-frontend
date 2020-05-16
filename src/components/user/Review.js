import React, { Component } from 'react';


export default class Review extends Component {
  render(){
    return (
        <div className="container">
 
        <h3 className="center">Order Status</h3>
        <ul className="stepper horizontal" style={{"min-height":"100px"}}>
        <li className="step">
      <div className="step-title waves-effect">Procesed</div>
   </li>
   <li className="step ">
      <div className="step-title waves-effect">Complete</div>
   </li>
   <li className="step active">
      <div className="step-title waves-effect">Review</div>
   </li>
      </ul>
            <div className="col s12 z-depth-6 card-panel">
            <form className="col s12">
      <div className="row">
   
      </div>

    </form>
            </div>
        </div>
        );
    }
 }