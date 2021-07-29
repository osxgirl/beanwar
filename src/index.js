import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-cpc56fcs.us.auth0.com"
    clientId="HbyKHdGvLSzHQmxf4rs8tA0PIxvhZgqz"
    redirectUri={window.location.origin}
   >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
            
                
);
