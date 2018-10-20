import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import AppRouter from './routers/AppRouter';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './components/Header';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutMePage from './components/AboutMePage';
import WebPage from './components/WebPage';
import DataPage from './components/DataPage';

library.add(faStroopwafel);
library.add(fab);

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Header />
          <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/contact" component={ContactPage} />                                
              <Route path="/aboutme" component={AboutMePage} />
              <Route path="/web" component={WebPage} />
              <Route path="/data" component={DataPage} />
          </Switch>
      </div>
    );
  }
}

export default App;
