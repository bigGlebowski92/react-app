import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { InputProvider } from './context/InputContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InputProvider>
      <App />
    </InputProvider>
  </React.StrictMode>
);
