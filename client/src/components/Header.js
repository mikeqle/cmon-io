import React from 'react';
import NavBar from './NavBar';

const Header = (props) => {
    return (
        <div className="header">
            <div className="logoDiv">
                <h1>c'mon</h1>
                <p className="logoSub">A common set of facts</p>
            </div>
            <NavBar />
        </div>
    )
};

export default Header;