import React, { Component } from 'react';
import './css/styles.css';

const Footer = function() {
 return (
  <div style={{"marginTop":"200px"}}>
    <footer>
<div style={{"min-height": "250px"}} className="footer" id="footer-sub">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h5> HELP </h5>
            <ul>
                <li><a href="/">Payments</a><hr/></li>
                <li><a href="/">Shipping</a><hr/ ></li>
                <li><a href="/">Cancellation & Returns</a><hr/></li>
                <li><a href="/">FAQ</a></li>               
            </ul>
            </div>

             <div className="col-md-4">
                <h5> Bundle Cloth </h5>
            <ul>
                <li><a href="/">Contact Us</a><hr/></li>
                <li><a href="/">About Us</a><hr/></li>
           
            </ul>
        </div>

         <div className="col-md-4">
            <h5> MISC </h5>
            <ul>
            
                <li><a href="/">Subscription</a><hr/></li>
                    
            </ul>
        </div>
       
        </div>

        
 <hr style={{"margin-bottom":"0px", "margin-top":"30px", "padding":"0px"}}/>
        <div className="row" id="sub-two">

            <div className="col-md-4">
                <div className="vertical-line text-center">
                    <span className="glyphicon glyphicon-map-marker"></span>
                    <h4>TRACK YOUR ORDER</h4>
                </div>
            </div>

            <div className="col-md-4">
                <div className="vertical-line text-center">
                    <span className="glyphicon glyphicon-refresh"></span>
                    <h4>FREE & EASY RETURNS</h4>
                </div>
            </div>

            <div className="col-md-4">
                <div style={{"margin":"8px"}} className="text-center">
                    <span className="glyphicon glyphicon-remove-circle"></span>
                    <h4 style={{"color":"#6d6c6c"}}>ONLINE CANCELLATIONS</h4>
                </div>
            </div>
            

        </div>
        <hr style={{"margin-bottom":"30px", "margin-top":"0px", "padding":"0px"}}/>

       

    </div>
</div>

</footer>
 </div>
 );
}
export default Footer;