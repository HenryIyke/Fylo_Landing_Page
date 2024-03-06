import Illustration2 from "../assets/illustration-2.svg";
import { FaChevronCircleRight } from "react-icons/fa";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import Avatar from "../assets/avatar-testimonial.jpg";

const Production = () => {
  return (
    <section className="background_svg mt-20">
      <div className="py-10 lg:py-20 px-[25px] md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-raleway font-bold text-fylo_dark_blue leading-snug mb-7 text-center lg:text-start">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-fylo_dark_blue">
              Never let location be an issue when accessing files. Rylo has you
              covered for all of your file storage needs. <br />
              <br />
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <span className="flex mt-4 items-center justify-start gap-3 w-max text-fylo_moderate_cyan cursor-pointer hover:underline duration-150 ease-linear">
              <span>See how fylo works</span>
              <span>
                <FaChevronCircleRight />
              </span>
            </span>
          </div>
          <div className="w-full md:w-1/2 p-0 lg:p-[50px] my-14 lg:my-0">
            <img src={Illustration2} alt="check" />
          </div>
        </div>
        <div className="w-full lg:w-[32%] bg-white p-[30px] shadow-2xl rounded-lg">
          <div className="flex text-2xl mb-3">
            <BiSolidQuoteSingleLeft />
            <BiSolidQuoteSingleLeft />
          </div>
          <p className="text-[15px] text-fylo_saturated_blue font-[500] mb-7">
            Fylo has improved our team productivity of an order of magnitude.
            Since making the switch our team has become a well-oiled coll
            oration machine.
          </p>
          <div className="w-full flex items-center justify-start gap-4">
            <img
              src={Avatar}
              alt="Profile"
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="flex flex-col items-start justify-start">
              <span className="font-bold">Kyle Burton</span>
              <span className="text-[13px]">Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
