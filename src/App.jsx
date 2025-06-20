import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from './assets/Component/HomePage/Home'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from './assets/Component/AboutPage/Aboutus';
import Blog from './assets/Component/BlogPage/Blog';
import Contactus from './assets/Component/ContactPage/Contactus';
import Service from './assets/Component/ServicePage/Service';

function App() {
  return (
    <Router> {/* Wrap your routes with Router */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="/Service" element={<Service/>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
