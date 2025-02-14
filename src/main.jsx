import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Nav /><App /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element = {<Register/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
