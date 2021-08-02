import React, { Component } from 'react';
import './App.css';
import LoginButton from './components/Login'
import Game from './components/Game'
import CommentsContainer from './containers/CommentsContainer'
import { Auth0Provider } from "@auth0/auth0-react"

class App extends Component {

  render() {
    return (
      <div className="App">
            <Auth0Provider
              domain="dev-cpc56fcs.us.auth0.com"
               clientId="HbyKHdGvLSzHQmxf4rs8tA0PIxvhZgqz"
                redirectUri={window.location.origin}
              >
            </Auth0Provider>
            <LoginButton />
            <Game />
            <CommentsContainer />
      </div>
     );
   }
}

      export default App;

