import React, { useState, useRef } from "react";
import {useNavigate} from "react-router-dom"
import {Links} from "./Links"
import logo from "@/assets/logo.png"
import smlogo from "@/assets/smlogo.png"
import { LgMenu } from "./LgMenu";
import { SmMenu } from "./SmMenu";
import {X} from "./X"
import { SmX } from "./SmX"


export const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate()
  const handleNavbar = () => {
    setActive(!active);
  };

  

  return (
    <nav
      className="header bg-transparent fixed shadow-sm px-2 h-[5rem] sm:px-4 py-2 md:py-[3rem] z-20 top-0 left-0 box-shadow w-full flex items-center"
    >
      <div className="wrapper order-2 w-[95%] md:w-[90%] flex items-center justify-between mx-auto">

        <div className="logo">
          <img src={smlogo} alt="logo" className="block md:hidden w-[3.1875rem] h-[1.77081rem]"/>
            <img src={logo} className="hidden md:block w-[5.0625rem] h-[2.8125rem]" alt="Logo"/>
        </div>

          <div
            className="mobile-menu-icon"
          >
            <SmMenu onClick={handleNavbar} className="block md:hidden" />
            <LgMenu onClick={handleNavbar} className="hidden md:block w-[2.75rem] h-[2.75rem]"/>
          </div>

        <ul
          ref={menuRef}
          className={`mobile-menu ${
            active ? "w-full" : "w-0"
          } h-screen overflow-hidden transition-allapho flex duration-300 ease-in-out z-10 absolute top-0 right-0 bg-[#0B1121]`}
        >
          {active && (
            <div>
              <X
              onClick={handleNavbar}
              className="close mt-8 right-16 hidden md:block cursor-pointer font-medium text-[40px] leading-5 not-italic absolute"
            />
            <SmX
             onClick={handleNavbar}
             className="close mt-8 right-16 block md:hidden cursor-pointer font-medium text-[40px] leading-5 not-italic absolute"/>
            </div>
          )}
          <ul className="flex flex-col justify-end md:p-4 w-[70%] md:w-[60%] mt-[400px] ml-[80px] md:mt-[100px] md:ml-[100px] md:mb-[100px]">
            <li className="">
             <Links to="/" handleRoute={(e) => {
              e.preventDefault()
              navigate("/")
              setActive(false)
             }}>
                Home
              </Links>
            </li>
            <li className="">
              <Links
                to="/projects"
               handleRoute={(e) => {
              e.preventDefault()
              navigate("/projects")
              setActive(false)
             }}
              >
                Projects
              </Links>
            </li>
            <li className="">
              <Links
                to="/about"
                handleRoute={(e) => {
                  e.preventDefault()
                  navigate("/about")
                  setActive(false)
                }}
              >
                About
              </Links>
            </li>
            <li className="">
                <Links
                to="/blogs"
               handleRoute={(e) => {
                e.preventDefault()
                navigate("blogs")
                setActive(false)
               }}
              >
                Blogs
              </Links>
            </li>
            <li className="mb-[50px] md:mb-0">
              <Links
                to="/resume"
               handleRoute={(e) => {
                e.preventDefault()
                navigate("resume")
                setActive(false)
               }}
              >
                Resume
              </Links>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};
