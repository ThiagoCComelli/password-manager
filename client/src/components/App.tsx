import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Login } from '../pages/Login/Login';
import './App.css';

function App() {
  
  useEffect(() => {
    const cursorRef = document.getElementsByClassName("cursor")[0]
    document.addEventListener("mousemove", (event) => {
      event.stopPropagation()
      cursorRef.setAttribute("style", `top: ${event.pageY - 10}px; left: ${event.pageX - 10}px;`)
    })  
    console.log("event")
    
  }, [])

  return (
    <div className="mainApp">
      <div className="cursor"></div>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Login/>} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
