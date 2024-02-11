import React from 'react';
import ReactDOM from 'react-dom/client';
import './SnakeApp.css';
import SnakeApp from './Snake';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnakeApp/>
  </React.StrictMode>
 
);
