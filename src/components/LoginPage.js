import React from 'react';
import { Link } from 'react-router-dom';
import { TickButtonComponent } from './elements/TickButtonComponent';
import ErrorsComponent from './elements/ErrorsComponent';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            permanent: true,
            validated: true,
            errors: [],
            success: ''
        };
    }

    componentWillMount() {         
    }

    componentDidMount() {
    }

    login = () => {
        
        let errors = [];
        this.setState({ errors: [] });
        if(this.state.email === "") {
            errors.push("Email cannot be empty.");            
        }

        if(this.state.password === "") {
            errors.push("Password cannot be empty.");            
        }

        if (errors.length > 0)
            this.setState({ errors });
        
        // TO-DO
        // API call

    }

    render() {
        return (
            <div className="container page" style={{ marginTop: 50 }}>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4 col-xl-4 col-xl-offset-4">
                        <form onSubmit={(e) => { e.preventDefault(); this.login(); }}>
                            <p>Enter your email and password to <strong>LOGIN</strong></p>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-envelope" style={{ display: 'block', width: '15px' }}></i>
                                    </span>
                                    <input type="email" className="form-control" placeholder="email (required)" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }); }} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-key " style={{ display: 'block', width: '15px' }}></i>
                                    </span>
                                    <input type="password" className="form-control" placeholder="password (required)" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }); }} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        Keep me logged in?
                                    </div>
                                    <div className="col-md-2 col-lg-2">
                                        <TickButtonComponent className="btn-xs" unselectedClass="btn-default" selected={this.state.permanent} onChange={(id, value) => { this.setState({ permanent: value }); }} />
                                    </div>
                                </div>
                            </div>
                            <ErrorsComponent errors={this.state.errors} />
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                                        <button type="submit" className="btn btn-primary btn-block"  onClick={this.login}>Login</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <span style={{ float: 'right' }}>Don't have an account? <Link role="button" to="/register">Register</Link></span>
                            </div>
                            <div className="row">
                                <span style={{ float: 'right' }}>Forget password? <Link role="button" to="/account/password/forget">Reset</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}


export default LoginPage;




