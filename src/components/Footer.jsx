import logo from "../assets/logo.svg";
import { BiLogoGmail } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-20 px-[25px] md:px-20 h-max bg-fylo_dark_blue text-white">
      <img src={logo} alt="seen" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8">
        <div className="mb-10 lg:mb-0">
          <span className="flex items-center gap-3 mb-4">
            <BiPhoneCall size={20} /> <span>+1-543-123-4567</span>
          </span>
          <span className="flex items-center gap-3">
            <BiLogoGmail size={20} /> <span>example@fylo.com</span>
          </span>
        </div>
        <ul className="space-y-4 mb-10 lg:mb-0">
          <li className="hover:text-fylo_saturated_blue cursor-pointer duration-150 ease-linear">
            About Us
          </li>
          <li className="hover:text-fylo_saturated_blue cursor-pointer duration-150 ease-linear">
            Jobs
          </li>
          <li className="hover:text-fylo_saturated_blue cursor-pointer duration-150 ease-linear">
            Press
          </li>
          <li className="hover:text-fylo_saturated_blue cursor-pointer duration-150 ease-linear">
            Blog
          </li>
        </ul>
        <ul className="space-y-4 mb-10 lg:mb-0">
          <li className="hover:text-fylo_saturated_blue cursor-pointer duration-150 ease-linear">
            Contact Us
          </li>
          <li className="hover:text-fylo_saturated_blue cursor-pointer duration-150 ease-linear">
            Terms
          </li>
          <li className="hover:text-fylo_saturated_blue cursor-pointer duration-150 ease-linear">
            Privacy
          </li>
        </ul>
        <div className="flex items-start justify-center gap-3">
          <IoLogoFacebook
            size={40}
            className="border border-white p-2 rounded-full hover:text-fylo_saturated_blue hover:border-fylo_saturated_blue duration-150 cursor-pointer"
          />
          <AiFillTwitterCircle
            size={40}
            className="border border-white p-2 rounded-full hover:text-fylo_saturated_blue hover:border-fylo_saturated_blue duration-150 cursor-pointer"
          />
          <FaInstagram
            size={40}
            className="border border-white p-2 rounded-full hover:text-fylo_saturated_blue hover:border-fylo_saturated_blue duration-150 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
