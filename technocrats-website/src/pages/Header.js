import React from "react";
import LogoWhite from "../assets/images/technocrats-logos/technocrats-logos_stroke.png";
import LogoShort from "../assets/images/technocrats-logos/technocrats-logos_crop.jpeg";
import { Facebook, LinkedIn, GitHub } from "../components/Icons";
import { handleClickScroll, navItems } from "../components/CommonFuns";
import "../index.css";

function Header({ setIsOpen, isOpen }) {

  return (
    <header className="flex shadow-md md:shadow-none h-30">
      {/** Nav bar for large screens */}
      <div className="hidden md:hidden lg:flex w-11/12 mt-5 items-center z-40 bg-zinc-800 p-6 mb-5 rounded-xl fixed ml-14">
        <div className="flex flex-row">
          {navItems.map(navItem => (
            <div onClick={() => handleClickScroll(navItem.nav, 150)} className="lg:nav-item">{navItem.label}</div>
          ))}
        </div>

        <div className="flex justify-between items-center ml-10 w-7/12">
          <div className="cursor-pointer" onClick={() => handleClickScroll("home", 150)}>
          <img
            className="h-11"
            src={LogoWhite}
            alt=""
          />
          </div>

          <div className="flex space-x-4">
            <GitHub />
            <Facebook />
            <LinkedIn />
          </div>
        </div>
      </div>

      {/** Nav bar for mobile screens */}
      <div className="flex lg:hidden justify-between items-center pt-3 ml-4 w-11/12 fixed bg-zinc-900 z-40">
        <div onClick={() => handleClickScroll("home", 100)}>
          <img
            className="lg:hidden rounded-3xl m-2"
            src={LogoShort}
            alt=""
            width="45"
          />
        </div>

        {/** onClick to open nav drawer */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" onClick={() => setIsOpen(!isOpen)} className="h-12">
          <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 
          .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;