import { useState, useEffect } from "react";
import logo from "@/assets/logo.png"
import smlogo from "@/assets/smlogo.png"
export const HamburgerMenu:React.FunctionComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
    <header className={`w-full head fixed top-0 left-0 bg-transparent z-20 px-2 sm:px-4 md:py-[rem] ${isMenuOpen ? 'active bg-[#141835] ok right-0' : "ok"}`}>

      <nav className="w-[95%] h-[6rem] md:w-[90%] flex justify-between items-center mx-auto">
        <div>
             <img src={smlogo} alt="logo" className="block md:hidden w-[3.1875rem] h-[1.77081rem]"/>
            <img src={logo} className="hidden md:block w-[5.0625rem] h-[2.8125rem]" alt="Logo" />
        </div>

        <div
          className={`nav-menu h-screen bg-[#141835] text-[18px] font-normal text-black overflow-hidden list-none z-10 ${
            isMenuOpen ? "active border-2" : ""
          } `}
        >
          <ul
            className="border-2 h-m"
          >
            <li className="my-[2.5rem] ml-20 hover:text-[#086d57]">
              <a href="#" className="" onClick={closeMenu}>
                <i className="fa fa-home" style={{ marginRight: "4px" }}></i>
                Home
              </a>
            </li>

            <li className="my-[2.5rem]">
              <a href="#" className="" onClick={closeMenu}>
                <i className="fa fa-group" style={{ marginRight: "4px" }}></i>
                About
              </a>
            </li>

            <li className="my-[2.5rem]">
              <a href="#" className="" onClick={closeMenu}>
                <i className="fa fa-bell" style={{ marginRight: "4px" }}></i>
                Notification
              </a>
            </li>

            <li className="my-[2.5rem]">
              <a href="#" className="" onClick={closeMenu}>
                <i className="fa fa-phone" style={{ marginRight: "4px" }}></i>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`hamburger flex justify-center h-[2.75rem] w-[2.75rem] items-center p-[8px] border-[3px] rounded-full ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
         <div className="borde dd">
             <span className="bar" style={{ backgroundColor: "white" }}></span>
          <span className="bar" style={{ backgroundColor: "white" }}></span>
         </div>
        </div>
      </nav>
    </header>
  );
};