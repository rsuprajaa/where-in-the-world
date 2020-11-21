import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
       <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
