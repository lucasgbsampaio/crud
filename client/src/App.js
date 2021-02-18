import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Login from './pages/Login';
import ListProducts from './pages/ListProducts';
import NotFound from './pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<ListProducts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
