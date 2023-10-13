import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./global.css";

const NoDOM = document.getElementById('root');
const root = ReactDOM.createRoot(NoDOM);
root.render(<App />);