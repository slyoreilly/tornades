import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import './i18n';

//if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
//}

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
,
  document.getElementById('root')
);
