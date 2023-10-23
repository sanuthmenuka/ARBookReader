import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';


import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { AuthContextProvider } from './context/AuthContext'

const theme = createTheme({
  typography:{
    fontFamily:[
      'Roboto',  // Use Roboto as the default font
      'Poppins', // Use Poppins as a secondary font
      'sans-serif',
    ].join(',')
      
    
  },
  palette: {
    background: {
      default: '#f7f7f7',
      paper:'#f7f7f7'
    
    }
   
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      
        <App />

    </AuthContextProvider>
  </ThemeProvider>
    
  </React.StrictMode>
);