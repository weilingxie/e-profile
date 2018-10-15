import React from 'react';
import { Link } from 'react-router-dom';
import ErrorsComponent from './elements/ErrorsComponent';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: [],
            registered: false
        };
    }

    componentDidMount() {

    }

    register = () => { 

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
                        {this.state.registered === false ?
                            <form onSubmit={(e) => { e.preventDefault(); this.register(); }}>
                                <p>Enter your email and password to <strong>REGISTER</strong></p>
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
                                <ErrorsComponent errors={this.state.errors} />
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                                            <button type="submit" className="btn btn-primary btn-block" onClick={this.register}>Register</button>                                    
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">                                    
                                    <span style={{ float: 'right' }}>Already have an account? <Link role="button" to="/login">Login</Link></span>
                                </div>
                            </form>
                            : null}
                        {
                            this.state.registered === true ?
                                <div className="alert alert-success text-center">
                                    <strong>Congratulations!!</strong> You have signed up successfully. Please check your email for a verification message.
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default RegisterPage;




