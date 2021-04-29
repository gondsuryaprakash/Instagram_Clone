import React from 'react'
import {Link} from 'react-router-dom'

const NavBar=()=>{
    return(
        <nav>
        <div className="nav-wrapper white">
          <a to="/" className="brand-logo left">Instagram</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
    )

}

export default NavBar
