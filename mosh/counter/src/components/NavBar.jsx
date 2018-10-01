import React from 'react';
const Navbar = ({ total }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar
        <span className="badge badge-pill badge-secondary">
                    {total}
                </span>
            </a>
        </nav>
    );
}

export default Navbar;