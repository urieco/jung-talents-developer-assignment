import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AutocompletionContextProvider } from './contexts/AutocompletionContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AutocompletionContextProvider>
      <App />
    </AutocompletionContextProvider>
  </React.StrictMode>,
);
