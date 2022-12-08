import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/User/Login";
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact={true} path={'/login'} element={<Login/>}/>
        <Route path={'*'} element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>

);
