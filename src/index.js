
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProvider from './components/auth/context.js';

const Main = () => <App />;

const rootElement = document.getElementById('root');
ReactDOM.render(<LoginProvider><Main /></LoginProvider>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
