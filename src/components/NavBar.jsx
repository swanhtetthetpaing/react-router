import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="flex justify-between items-center py-3">
        <h3 className="text-2xl text-blue-500">Router</h3>
        <ul className="flex items-center gap-x-10">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li className="relative">
            <NavLink to={"/account"}>Account</NavLink>
            <ul className="absolute top-full right-0 bg-gray-100 rounded p-3 w-36">
              <li>
                <NavLink className="block py-2 px-3 duration-300 hover:bg-gray-200" to={"/account/signin"}>Sign In</NavLink>
              </li>
              <li>
                <NavLink className="block py-2 px-3 duration-300 hover:bg-gray-200" to={"/account/signup"}>Sign Up</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
