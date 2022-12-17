import React from 'react';import './App.css';
import 'antd/dist/reset.css';
import { Login,Signin,Home } from './components';
import {BrowserRouter, BrowserRouter as Switch, Route, Router, Routes } from "react-router-dom";

 function App() {
  return (
    <div className='App-header'>
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          </Routes>
          <Routes>
          <Route exact path="/signin" element={<Signin/>} />
          </Routes>
          <Routes>
          <Route exact path="/home" element={<Home/>} />
          </Routes>
          
      </div>
         </BrowserRouter>
    
</div>
  
  
  );
}

export default App;

