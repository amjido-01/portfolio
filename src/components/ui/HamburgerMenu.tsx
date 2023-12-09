import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import smlogo from "@/assets/smlogo.png";
import { Links } from './Links';
import { useNavigate } from "react-router-dom";
export const HamburgerMenu:React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <header className={`w-full absolute top-0 left-0 z-20 px-2 sm:px-4 md:py-[rem] ${isMenuOpen ? 'active bg-[#141835] bg-collapse right-0' : "bg-collapse"}`}>

      <nav className="w-[95%] h-[6rem] md:w-[87%] flex justify-between items-center mx-auto">
        <div>
             <img src={smlogo} alt="logo" className="block md:hidden w-[3.1875rem] h-[1.77081rem]"/>
            <img src={logo} className="hidden md:block w-[5.0625rem] h-[2.8125rem]" alt="Logo" />
        </div>

        <div
          className={`nav-menu h-screen bg-[#141835] text-[18px] font-normal text-black overflow-hidden list-none z-10 ${
            isMenuOpen ? "active" : ""
          } `}
        >
          <ul
            className="flex nav-list absolute bottom-[230px] sm:bottom-[110px] flex-col justify-end md:p-4 w-[70%] md:w-[60%] ml-[70px] md:ml-[100px] md:mb-[100px"
          >
            <li className="">
             <Links to="/" handleRoute={(e) => {
              e.preventDefault()
              navigate("/")
              toggleMenu()
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
              toggleMenu()
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
              toggleMenu()
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
              navigate("/blogs")
              toggleMenu()
             }}
              >
                Projects
              </Links>
            </li>
            <li className="">
                 <Links
                to="/resume"
               handleRoute={(e) => {
              e.preventDefault()
              navigate("/resume")
              toggleMenu()
             }}
              >
                Resume
              </Links>
            </li>
          </ul>
        </div>

        <div
          className={`hamburger flex justify-center w-[1.575rem] h-[1.575rem] md:h-[2.75rem] md:w-[2.75rem] items-center p-[12px] md:p-[8px] border-[1.5px] md:border-[3px] rounded-full ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
         <div className="borde flex flex-col gap-1 justify-center items-center dd">
             <span className="bar" style={{ backgroundColor: "white" }}></span>
          <span className="bar" style={{ backgroundColor: "white" }}></span>
         </div>
        </div>
      </nav>
    </header>
  );
};