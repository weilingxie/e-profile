import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Config from '../Config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: null };
    }

    render() {
        return (
                <div className="navbar">
                    <Link to="/" className="navbar-brand">
                        <p>Weiling Xie</p>
                    </Link>
                    <div className="navbar-buttons">
                        <NavLink to="/" exact className="navbar-buttons-btn navbar-button-home" activeClassName="navbar-buttons-btn-active">
                            Home
                        </NavLink>
                        <NavLink to="/aboutme" className="navbar-buttons-btn navbar-button-aboutme" activeClassName="navbar-buttons-btn-active">
                            About Me
                        </NavLink>
                        <NavLink to="/contact" className="navbar-buttons-btn navbar-button-contact" activeClassName="navbar-buttons-btn-active">
                            Contact
                        </NavLink>
                    </div>                                                
                    <div className="navbar-socialmedia">
                        <a className="navbar-socialmedia-item" href={Config.FACKBOOK_URL}>
                            <FontAwesomeIcon icon={['fab','facebook']} size='2x'/>
                        </a>
                        <a className="navbar-socialmedia-item" href={Config.LINKEDIN_URL}>
                            <FontAwesomeIcon icon={['fab','linkedin']} size='2x'/>   
                        </a>
                    </div>
                </div>
            );
    }
}

export default Header;
