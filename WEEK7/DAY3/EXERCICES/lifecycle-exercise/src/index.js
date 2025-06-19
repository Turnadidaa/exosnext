import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ColorComponent from './App'; // on utilise notre composant ici

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorComponent />
  </React.StrictMode>
);
