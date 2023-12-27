import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Layout from "./components/layout/Layout";
import NotFoundLayout from "./components/layout/NotFoundLayout";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={ <NotFoundLayout><NotFound /></NotFoundLayout> } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
