import React, { useState } from "react";
import { NavLink } from "react-router-dom";


//icons
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

//Styles
import "./Nav.css";
  
function Nav() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
    
    const closeMenu = () => {
        setNavbarOpen(false)
      }

    return (
        <nav className="navBar">
            <button onClick={handleToggle}>
                {navbarOpen ? (
                <MdClose style={{ color: "var(--secondary-color)", 
                width: "30px", 
                height: "30px" }} />
            ) : (
                <FiMenu style={{ color: "var(--secondary-color)", 
                width: "30px", 
                height: "30px" }} />
            )}
            </button>

            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <NavLink to="/"activeClassName="active-link"
                onClick={() => closeMenu()}
                exact>HomePage</NavLink>
                <NavLink to="/login"activeClassName="active-link"
                onClick={() => closeMenu()}
                exact>Login</NavLink>
            </ul>
            
        </nav>
    );
}

export default Nav;