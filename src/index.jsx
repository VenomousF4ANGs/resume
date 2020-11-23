import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import App from './components/main/App';
import Main from './components/Main';
import reportWebVitals from './common/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals( console.log );
