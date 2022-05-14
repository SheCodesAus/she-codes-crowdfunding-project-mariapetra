import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/final-logo-jpg-white-text.jpg';


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
        <img className="logo" src={Logo}></img>
            
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
                    <Link 
                        to="/" 
                        className="active-link" 
                        onClick={() => closeMenu()}
                    >
                        HomePage
                    </Link>
                    <Link 
                        to="/login"
                        className="active-link"
                        onClick={() => closeMenu()}
                    >
                        Login
                    </Link>
            </ul>   
            </section>
              
        </nav>

   
    );
}

export default Nav;