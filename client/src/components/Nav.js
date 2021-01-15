import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from "../Assets/Logo.png";

function Nav() {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <img src={logo} alt="logo"/>
            <ul className="nav-links"> 
                <Link style={navStyle} to="/">
                    <li> Home</li>
                </Link>
                <Link style={navStyle} to="/Songs"> 
                    <li> Songs</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;