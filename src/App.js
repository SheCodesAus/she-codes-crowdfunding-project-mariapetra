import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import styles
import "./App.css";

//components
import Nav from "./components/Nav/Nav";

//pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";


function App() {
  return (
    <Router>
    <div>

    <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/" element={<HomePage />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;