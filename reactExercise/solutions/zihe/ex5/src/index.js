import React from 'react';
import ReactDOM from 'react-dom/client';
import Lifecycle from './Lifecycle';
import UseEffect from './UseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lifecycle />
    <UseEffect />
  </React.StrictMode>
);