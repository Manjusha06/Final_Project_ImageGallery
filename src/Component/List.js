import React from 'react';
import logo from '../images/cam_logo.jpg';
import { NavLink } from 'react-router-dom';
import '../Css/ListStyle.css';
const List = ()=>{

return(
    <>
 <header>
   
    <div className="logoConatiner">
            <div><img src={logo} alt="logo" className="logo"/>
            </div>
            <h>Gallery of Life</h>
            <div className="list">
                <NavLink  exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                <NavLink hidden={localStorage.getItem("enablelogout") == 1} to="/login" className="listItem" activeClassName="activeItem">Login</NavLink>
                <NavLink  hidden={localStorage.getItem("enablelogout") == 1} to="/register" className="listItem" activeClassName="activeItem">Register</NavLink>
                <NavLink to="/contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
            </div>
            </div>
    </header>  
    </>
)
}

export default List;