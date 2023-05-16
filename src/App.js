import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';




const App = () => {
  useEffect(() => {
    document.title = 'Chat GPT-3';
  }, []);

  return (  
    <div className="App">
    <div className="gradient__bg">
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
  </div>
  )
}

export default App;
