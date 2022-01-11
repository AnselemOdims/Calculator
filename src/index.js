import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import NotMatch from './pages/NotMatch';

const home = '/calculator';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={`${home}`} element={<Home />} />
        <Route path={`${home}/calc`} element={<Calculator />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
