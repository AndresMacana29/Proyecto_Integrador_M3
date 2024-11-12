import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Loggin from './Components/Loggin';
import RegisterUser from './Components/RegisterUser';
import Dashboard from './Components/Dashboard';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Hotel from './Components/Hotel';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/registeruser" element={<RegisterUser/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/hotel" element={<PrivateRoute requiredRole="administrador"><Hotel/></PrivateRoute>}/>
        <Route path="/loggin" element={<Loggin/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
