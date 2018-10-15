import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faStroopwafel);
library.add(fab);

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <AppRouter />       
      </div>
    );
  }
}

export default App;
