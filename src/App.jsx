import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Account from "./components/Account";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import User from "./components/User";

const App = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/account" element={<Account />} >
            <Route index element={<Profile />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
