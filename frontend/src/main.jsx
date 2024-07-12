import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/style.scss'
import axios from 'axios';

axios.defaults.withCredentials = true;
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>,
)
/*  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
) 
 */