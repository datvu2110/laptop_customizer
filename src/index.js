import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import defaultFeatures from './Components/defaultFeatures'

ReactDOM.render(<App features={defaultFeatures}/>, document.getElementById('root'));
