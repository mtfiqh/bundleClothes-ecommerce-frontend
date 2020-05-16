import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Bundle Cloth</Link>
                    
                    <ul className="right right hide-on-med-and-down">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart"><i className="material-icons left prefix">shopping_cart</i>My cart</Link></li>
                        <li><Link to="/Register" className="waves-effect waves-light btn">Sign Up</Link></li>
                        <li><Link to="/Login" className="waves-effect waves-light btn">Login</Link></li>
                        <li><div class="center row">
                          <div class="col s12 " >
                            <div class="row" id="topbarsearch">
                              <div class="input-field col s6 s12 ">
                                <i class="material-icons prefix">search</i>
                                <input type="text" placeholder="Search Product.."  />
                                </div>
                              </div>
                            </div>
                          </div></li> 
                    </ul>
                </div>
            </nav>

    )
}

export default Navbar;