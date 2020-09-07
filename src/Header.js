import React from 'react';
import './styles/Header.css';

const Header = () => {
    return (
        <div className="header">
                <h2>Unlimited is Over Crowded</h2>
                <p>The word is real content during design can distract designers and design review
                teams alike away from the design, and insisting on always.</p>
                <input type="button" value="Hire Us Now" />
                <img src={require('./images/header-rocket.jpg')} />
            </div>
    );
};

export default Header;