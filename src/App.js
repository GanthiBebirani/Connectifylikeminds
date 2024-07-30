import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Domain from './Components/Domain';
import Loginform from './Components/Loginform';
import Register from './Components/Register';
import Pythoncourse from './Components/Pythoncourse';
import 'bootstrap/dist/css/bootstrap.min.css';
import Webfundamentals from './Components/Webfundamentals';
import Croadmap from './Components/Croadmap';
import Congratulations from './Components/Congratulations';
import Groupcombo from './Components/Groupcombo';
import UIpage from './Components/UIpage';
import About from './Components/About';
import Services from './Components/Services';
import Chatting from './Components/Chatting';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/uipage" />} />
          <Route path="/uipage" element={<UIpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/home" element={<Home />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pythoncourse" element={<Pythoncourse />} />
          <Route path="/webfundamentals" element={<Webfundamentals />} />
          <Route path="/croadmap" element={<Croadmap />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="/groups" element={<Groupcombo />} />
          <Route path="/chatting" element={<Chatting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
