import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../Config.json';
//import BBC_Logo from '../BBC_News.svg';
import BBC_Logo from '../YinYang.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: null };
    }

    render() {
        return (
                <div className="navbar-container">
                        <Link to="/" className="navbar-logo">
                            <span><img src={BBC_Logo} height={50} alt="logo"></img></span>
                        </Link>
                        <ul className="navbar-buttons">
                            <li className="active"><a href="#">Home</a></li>
                            <li>
                                <Link to="/home1" className="navbar-left">
                                    Page 1
                                </Link>
                                </li>
                            <li><a href="#">Page 2</a></li>
                        </ul>                                                
                        <div className="navbar-socialmedia">
                            <a className="navbar-fackbook" href={Config.FACKBOOK_URL}>
                                <FontAwesomeIcon icon={['fab','facebook']} size='3x'/>
                            </a>
                            <a className="navbar-linkedin" href={Config.LINKEDIN_URL}>
                                <FontAwesomeIcon icon={['fab','linkedin']} size='3x'/>   
                            </a>
                        </div>
                </div>
            );
    }
}

export default Header;
