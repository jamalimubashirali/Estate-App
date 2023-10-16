import React from 'react';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import About from './pages/About';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sign-in" element={<Signin />}/>
      <Route path="/sign-up" element={<Signup />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  )
}
