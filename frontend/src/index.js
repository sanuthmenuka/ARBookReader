import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      
        <App />

    </AuthContextProvider>
  </React.StrictMode>
);