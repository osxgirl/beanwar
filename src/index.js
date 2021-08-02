import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {createStore, applyMiddleware } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import commentReducer from './reducers/commentReducer'
import thunk from 'redux-thunk';

const store = createStore(commentReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
