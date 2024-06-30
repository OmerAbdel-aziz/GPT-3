import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Blog , Features , Header , Possibility, WhatGPT3 , Footer} from "./containers";
import {Article , CTA , Navbar , Brand , Feature } from "./components";
import "./App.css";
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
