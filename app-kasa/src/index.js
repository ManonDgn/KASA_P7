import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
      <Router exact path="/">
        <Home />
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)