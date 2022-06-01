import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from "@mui/material";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: {
      main: '#446bf5',
      dark: '#250556',
    },
    secondary: {
      main: '#3A57E8',
    },
  },
  typography: {
    fontFamily: 'Arial',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 16,
    fontSize: 14,
  }
});

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
