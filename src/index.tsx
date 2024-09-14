import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
export * from './redux/user/userActions'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

