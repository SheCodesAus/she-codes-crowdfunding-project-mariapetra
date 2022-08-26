import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//cpm[onents]
import Nav from "./components/Nav/Nav";

//import styles
import "./App.css";

//pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";

//components 
import HeroCarousel from "../src/components/Hero/HeroHome"



function App() {
  return (
    <Router>
    <>
      <Nav />
      <HeroCarousel />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
    </>
    </Router>
  );
}

export default App;