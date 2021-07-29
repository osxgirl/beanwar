import React, { Component } from 'react';
import './App.css';
import LoginButton from './components/Login'
import Game from './components/Game'


class App extends Component {

  render() {
    return (
      <div className="App">
            <LoginButton />
            <Game />
      </div>
     );
   }
}

      export default App;

