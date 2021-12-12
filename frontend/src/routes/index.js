import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/page404';

const Routers = function () {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routers;
