import React from 'react';
import {NavLink } from 'react-router-dom';
// import Main from './Main';
// import Songs from './Songs';

const Header = () => {
    return (
        <nav> 
            <NavLink exact activateClassName="active" to="/">
                Main Page
            </NavLink>
            <NavLink exact activateClassName="active" to="/Songs">
                Songs Page
            </NavLink>
        </nav>
    );
}

export default Header;