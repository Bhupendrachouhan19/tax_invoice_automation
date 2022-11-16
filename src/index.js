import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TransactionsProvider } from './components/TransactionCrypto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TransactionsProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransactionsProvider>
);

