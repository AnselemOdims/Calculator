import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import NotMatch from './pages/NotMatch';
import Header from './components/Header';
import Quote from './pages/Quotes';

const home = '/';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path={`${home}`} element={<Home />} />
        <Route path={`${home}/calc`} element={<Calculator />} />
        <Route path={`${home}/quote`} element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
