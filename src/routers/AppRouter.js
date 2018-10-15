import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import NewsDetailPage from '../components/NewsDetailPage';
import HomePage1 from '../components/HomePage1';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    
    render() {
        return (
            <div>
                <HeaderComponent />
                <Route render={({ location })=>(
                    <TransitionGroup>
                        <CSSTransition
                         key={location.key}
                         timeout={450}
                         classNames="fade"
                        >
                            <Switch location={location}>
                                <Route path="/" render={(routeProps) => (<HomePage {...routeProps} />)} exact={true} />
                                <Route path="/home1" render={(routeProps) => (<HomePage1 />)} exact={true} />                                
                                <Route path="/login" render={(routeProps) => (<LoginPage {...routeProps} />)} exact={true} />
                                <Route path="/register" render={(routeProps) => (<RegisterPage {...routeProps} />)} exact={true} />
                                <Route path="/newsdetail/:news_id" render={(routeProps) => (<NewsDetailPage {...routeProps} />)} exact={true} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
                
            </div>
        );
    }
}

export default AppRouter;
