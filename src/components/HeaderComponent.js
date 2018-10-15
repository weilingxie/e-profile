import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../Config.json';
import BBC_Logo from '../BBC_News.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: null };
    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log("Mount Header");
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="navbar-header col-lg-3">
                            <Link to="/" className="navbar-left">
                                <span><img src={BBC_Logo} height={50} alt="logo"></img></span>
                            </Link>
                        </div>
                        <ul className="nav navbar-nav col-lg-3">
                            <li className="active"><a href="#">Home</a></li>
                            <li>
                                <Link to="/home1" className="navbar-left">
                                    Page 1
                                </Link>
                                </li>
                            <li><a href="#">Page 2</a></li>
                        </ul>                        
                        <ul className="nav navbar-nav navbar-right col-sm-3 col-md-2 col-lg-2 col-xl-2">
                            <li>
                                <Link className="loginButton upper-nav" role="button" to="/register">
                                    <span className="glyphicon glyphicon-user" />
                                    <span> Register</span>                                    
                                </Link>
                            </li>
                            <li>
                                <Link className="loginButton upper-nav" role="button" to="/login">
                                    <span className="glyphicon glyphicon-log-in" />
                                    <span> Login</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="nav navbar-nav navbar-right col-sm-3 col-md-2 col-lg-2 col-xl-2 row">
                            <a className="col-sm-4 col-md-3 col-lg-3 col-xl-2" href={Config.FACKBOOK_URL}>
                                <FontAwesomeIcon icon={['fab','facebook']} size='3x'/>
                            </a>
                            <a className="col-sm-4 col-md-3 col-lg-3 col-xl-2" href={Config.LINKEDIN_URL}>
                                <FontAwesomeIcon icon={['fab','linkedin']} size='3x'/>   
                            </a>
                            <a className="col-sm-4 col-md-3 col-lg-3 col-xl-2" href={Config.YOUTUBE_URL}>
                                <FontAwesomeIcon icon={['fab','youtube']} size='3x'/>   
                            </a>
                        </div>
                        </div>
                    </div>
                </nav>
            </header>
            );
    }

}

export default HeaderComponent;
