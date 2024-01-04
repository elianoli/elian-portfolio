"use client";

import { useState } from "react";

const Navbar = () => {
  const TOGGLE_START: boolean = false;

  const [toggle, setToggle] = useState(TOGGLE_START);

  return (
    <>
      <nav className="nav">
        <h2 className="text-3xl text-white">
          <a href="#">./&nbsp;elian</a>
        </h2>
        <div id="menu" className={`${toggle ? "block" : "hidden"} md:block`}>
          <ul className="links">
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </ul>
        </div>
        <button className="btn">Hire&nbsp;me</button>
        <svg
          id="menu-button"
          xmlns="<http://www.w3.org/2000/svg>"
          className="h-8 w-8 cursor-pointer md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
          onClick={() => setToggle(!toggle)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>
    </>
  );
};

export default Navbar;
