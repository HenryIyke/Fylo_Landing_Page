import { useState } from "react";
import HeroImg from "../assets/illustration-1.svg";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Reset error and registration state when the user types
    setIsError(false);
    setIsRegistered(false);
  };

  const handleGetStarted = () => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (email.trim() === "" || !isValidEmail) {
      // Set error state if the email is empty or in the wrong format
      setIsError(true);
      // Reset registration state
      setIsRegistered(false);
    } else {
      // Handle the successful case, e.g., form submission or other actions
      setIsRegistered(true);
      // Additional logic for successful registration
      console.log("Form submitted with email:", email);
    }
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 place-items-center place-content-center mt-7 lg:mt-20 px-[25px] lg:px-20">
      <div>
        <h1 className="text-4xl font-raleway font-bold text-fylo_dark_blue leading-snug mb-7 text-center lg:text-start">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="w-full lg:w-[90%] mb-6 text-fylo_dark_blue text-center lg:text-start">
          Flyo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 pr-0 lg:pr-[25px] text-[15px] relative">
          <input
            type="text"
            placeholder="Enter your email"
            className={`py-2 px-3 w-full lg:w-[65%] border ${
              isError ? "border-red-500" : "border-fylo_saturated_blue"
            } rounded-sm placeholder:text-[14px]`}
            value={email}
            onChange={handleEmailChange}
          />
          {isError && (
            <p className="text-red-500 text-[14px] absolute top-full -left-2 p-0">
              Please check your email
            </p>
          )}
          {!isError && isRegistered && (
            <p className="text-green-500 text-[14px] absolute top-full -left-2 p-0">
              Successful registered
            </p>
          )}
          <button
            className="py-2 px-3 w-full lg:w-[30%] bg-fylo_bright_blue text-white rounded-sm"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="p-0 lg:p-[50px]">
        <img src={HeroImg} alt="Do it right" />
      </div>
    </section>
  );
};

export default Hero;
