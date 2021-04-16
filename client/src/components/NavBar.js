import react, { useState } from 'react';
import { Link } from '@reach/router';

const NavBar = (props) => {
    return(
        <div>
            <Link to={ "/home" }>Home</Link>
            {/* <Link to={ "/common" }>Common Facts</Link>
            <Link to={ "/contested" }>Disputed</Link> */}
            <Link to={ "/profile" }>Your Opinions</Link>
        </div>
    )
};

export default NavBar;