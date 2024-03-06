import { useState } from "react";

const Cta = () => {
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
    <section className="p-[25px] lg:p-20 bg-fylo_saturated_blue grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
      <div className="text-white">
        <h1 className="text-4xl font-raleway font-bold text-white leading-snug mb-7 text-center lg:text-start mt-10 lg:mt-0">
          Get early access today
        </h1>
        <p className="w-full md:w-[80%]">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any question, our support team would
          be happy to help.
        </p>
      </div>
      <div className="w-full flex flex-col items-start justify-between space-y-5 text-[15px] relative mb-10 lg:mb-0">
        <input
          type="text"
          placeholder="Enter your email"
          className={`py-2 px-3 w-full lg:w-[85%] border ${
            isError ? "border-red-500" : "border-fylo_saturated_blue"
          } rounded-sm placeholder:text-[14px]`}
          value={email}
          onChange={handleEmailChange}
        />
        {isError && (
          <p className="text-white text-[14px] absolute top-full -left-2 p-0">
            Please check your email
          </p>
        )}
        {!isError && isRegistered && (
          <p className="text-green-500 text-[14px] absolute top-full -left-2 p-0">
            Successful registered
          </p>
        )}
        <button
          className="py-2 px-3 w-full lg:w-[40%] bg-fylo_bright_blue text-white rounded-sm hover:shadow-2xl"
          onClick={handleGetStarted}
        >
          Get Started For Free
        </button>
      </div>
    </section>
  );
};

export default Cta;
