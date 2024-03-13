import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import Sidescroll from "./pages/sidescroll";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Sidescroll />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
