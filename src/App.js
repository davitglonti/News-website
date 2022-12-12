import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from "react";
import Home from './components/Pages/Home/Home';
import Politics from './components/Pages/Politics';
import { Sports } from './components/Pages/Sports';
import Culture from './components/Pages/Culture';
import { HotNews } from './components/Pages/HotNews';
import Category from './components/Pages/Home/Category';
import Fullinfo from './components/Pages/Fullinfo';
import Footer from './components/Pages/Footer';
import Quiz from './components/Pages/Quiz/Quiz';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
          <Navbar/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/Politics" element={<Politics/>}/>
          <Route path="/Sports" element={<Sports/>}/>
          <Route path="/Culture" element={<Culture/>}/>
          <Route path="/HotNews" element={<HotNews/>}/>
          <Route path="/Fullinfo/:id" element={<Fullinfo/>}/>
          <Route path="/Quiz" element={<Quiz/>}/>
        </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
