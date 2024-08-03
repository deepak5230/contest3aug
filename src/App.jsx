// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePages from './components/HomePages';
import DetailPage from './components/DetailPage';
import './App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages/>} />
        <Route path="/item/:id" element={<DetailPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
