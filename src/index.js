import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-toastify/dist/ReactToastify.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ReduxStore } from "../src/Components/Redux/ReduxStore"
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify"



ReactDOM.render(
  <Provider store={ReduxStore}>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

