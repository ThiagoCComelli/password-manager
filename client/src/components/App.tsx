import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import './App.css';
import { Navbar } from './Navbar/Navbar';

function App() {
  return (
    <div className="mainApp">
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
