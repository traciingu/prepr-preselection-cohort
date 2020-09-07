import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li>Tracy</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Sign In</li>
            </ul>
        </nav>
    );
};

export default Navbar;