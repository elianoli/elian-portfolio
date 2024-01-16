"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const TOGGLE_START: boolean = false;

  const [toggle, setToggle] = useState(TOGGLE_START);

  return (
    <>
      <nav className={`nav ${toggle ? "gap-9 backdrop-blur rounded-xl" : ""}`}>
        {/* Logo */}
        <h2 className="text-3xl text-white order-1">
          <Link href={"/#"}>ELIAN</Link>
        </h2>

        {/* Links archors */}
        <div
          className={`${
            toggle ? "block" : "hidden"
          } md:block order-3 flex justify-center  basis-full md:basis-auto`}
        >
          <ul
            className={`links ${
              toggle ? "flex flex-col md:flex-row flex-wrap gap-2" : ""
            }`}
          >
            <Link href={"/#about"}>About</Link>
            <Link href={"/#projects"}>Projects</Link>
            <Link href={"/#contact"}>Contact</Link>
          </ul>
        </div>

        {/* Empty div */}
        <div className="md:basis-auto order-1"></div>

        {/* Hire me button */}
        <div
          className={`order-1 md:order-4 flex justify-center ${
            toggle ? "basis-full md:basis-auto order-4" : ""
          }`}
        >
          <button className="btn">Hire&nbsp;me</button>
        </div>

        {/* Hamburger menu */}
        <svg
          xmlns="<http://www.w3.org/2000/svg>"
          className="h-8 w-8 cursor-pointer md:hidden order-1"
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
