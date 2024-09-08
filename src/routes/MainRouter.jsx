import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from '../pages';
import { Navbar } from '../components';

export const MainRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};
