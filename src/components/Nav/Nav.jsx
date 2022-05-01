import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo-final-jpg.jpg';


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
            
            <section>
                <button onClick={handleToggle}>
                    {navbarOpen ? (
                    <MdClose 
                    style={{ color: "var(--secondary-color)", 
                    width: "30px", 
                    height: "30px" }} />
                ) : (
                    <FiMenu 
                    style={{ color: "var(--secondary-color)", 
                    width: "30px", 
                    height: "30px" }} />
                )}
                </button>     
                <ul 
                    className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <Link to="/"activeClassName="active-link"
                    onClick={() => closeMenu()}
                    exact>HomePage</Link>
                    <Link to="/login"activeClassName="active-link"
                    onClick={() => closeMenu()}
                    exact>Login</Link>
            </ul>   
            </section>
              
        </nav>

   
    );
}

export default Nav;