import './App.css';
import React, { useState } from 'react';
import './assets/main.css'
import { Navbar, Navlink, Newtag, Navimg, Leftside, Rightside } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Navimg link="/" imglink="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg" size="w-16"></Navimg>
        <Leftside>
          <Navlink link="#">Home</Navlink>
          <Navlink link="#">Courses</Navlink>
          <Newtag link="#">Practice</Newtag>
          <Navlink link="#">Event</Navlink>
          <Navlink link="#">Campus Ninjas</Navlink>
          <Navlink link="#">Blog</Navlink>
          <Navimg link="#" imglink="https://files.codingninjas.in/cc-desktop-2-5363.svg" size="w-24"></Navimg>
        </Leftside>
        <Rightside>
          <Navlink link="#">My Classroom</Navlink>
          <div className="py-2 col-1 pl-4 pr-2">
            <button className="login-button px-5 py-1.5 rounded-full text-white">Login</button>
          </div>
          
        </Rightside>
        
        
        
        <div>

        </div>
      </Navbar>
      
      
      
      
    </div>
  );
}

export default App;
