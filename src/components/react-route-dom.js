import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import GitHubInteractions from './GitHubInteractions';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/github" element={<GitHubInteractions />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
