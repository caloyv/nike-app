import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="transition-transform hover:scale-110">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden  cursor-pointer">
          <img
            src={hamburger}
            alt="hambuger"
            width={25}
            height={25}
            onClick={handleClick}
          />
          <div className={`absolute inset-0 top-[100px] w-full z-10 h-[50vh] transition-transform ${isOpen ? "translate-y-[0px]" : "translate-y-[-1000px]"}`}>
            <div className="w-[90%] h-full mx-auto bg-white shadow-3xl rounded-xl">
              <ul className="h-full py-24 flex flex-col items-center justify-evenly gap-16">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
