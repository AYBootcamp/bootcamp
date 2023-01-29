import React from 'react';
import ReactDOM from 'react-dom/client';
import FakeFetch from './FakeFetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FakeFetch />
  </React.StrictMode>
);