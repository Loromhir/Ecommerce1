import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/NavBar.css'
import './styles/Product.css'
import store from './redux/store/index';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
     <App />
  </BrowserRouter>
  </Provider>
);
