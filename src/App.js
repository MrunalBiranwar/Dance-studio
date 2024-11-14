import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import './App.css';
import NotFound1 from './views/not-found.js';
import Home from './views/home';
import SignIn3 from './components/sign-in3.js';
import SignUp10 from './components/sign-up10.js';
import About from './components/about.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in3" element={<SignIn3 />} />
        <Route path="/sign-up10" element={<SignUp10 />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<NotFound1 />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound1 />} />
        {/* Redirect to a fallback route */}
        <Route path="**" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
};

export default App;
