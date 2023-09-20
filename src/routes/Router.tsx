import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importe 'Routes' e 'Route'

import TestePage from '../pages/TestePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TestePage />} />
    </Routes>
  );
};

export default AppRoutes;
