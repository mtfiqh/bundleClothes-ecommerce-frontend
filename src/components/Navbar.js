import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Bundle Cloth</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart"><i className="material-icons left">shopping_cart</i>My cart</Link></li>
                        <li><a class="waves-effect waves-light btn">Sign Up</a></li>
                        <li><Link to="/Login" class="waves-effect waves-light btn">Login</Link></li>
                    </ul>
                </div>
            </nav>

    )
}

export default Navbar;