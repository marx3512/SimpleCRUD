import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Global from './styles/GlobalStyles';
import Header from './components/Header';
import Routers from './routes';

const App = function () {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Global />
    </BrowserRouter>
  );
};

export default App;
