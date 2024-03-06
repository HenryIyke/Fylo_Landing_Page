import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between relative px-[25px] lg:px-20">
      <img src={Logo} alt="Company Brand" className="w-[100px]" />
      <ul className="hidden lg:flex capitalize font-raleway items-center justify-between gap-10">
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/">Team</Link>
        </li>
        <li>
          <Link to="/">Sign In</Link>
        </li>
      </ul>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } capitalize font-raleway items-center justify-center gap-10 absolute top-10 right-0 flex-col bg-fylo_dark_blue text-white w-1/2 p-[35px] h-[250px] rounded-tl-lg rounded-bl-lg`}
      >
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/">Team</Link>
        </li>
        <li>
          <Link to="/">Sign In</Link>
        </li>
      </ul>
      <IoMenuOutline
        className="flex lg:hidden text-4xl text-fylo_dark_blue cursor-pointer"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
