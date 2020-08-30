import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import './i18n';

//if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
//}

ReactDOM.render(
  <CookiesProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </CookiesProvider>
,
  document.getElementById('root')
);
