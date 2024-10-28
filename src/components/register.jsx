import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rightbg from "./right-bg.png";
import top from "./top.png";
import bottom from "./bottom.png";
import org from "./org-build.png";

const Register = () => {
    const navigate = useNavigate();
  const [step, setStep] = useState(0); // Step state to track the current form
  const [active, setActive] = useState("email");

  const handleNext = () => {
    if (step === 0) {
      setStep(1); // Move to display name step
    } else if (step === 1) {
      setStep(2); // Move to password step
    }
  };

  return (
    <div className="flex justify-center align-middle md:grid md:grid-cols-4">
      {/* <!-- first grid --> */}
      <div className="col-span-2 justify-center align-middle m-28">
        <div className="bg-orange-100 rounded-3xl w-max mb-8 ">
          <img src={org} alt="Org" className="md:h-28 hidden md:block" />
        </div>

        {/* <!-- responsive form --> */}
        <div className="flex flex-col justify-center align-middle text-center md:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${rightbg})`, opacity: 0.07 }}
          ></div>

          {step === 0 && (
            <>
              <div className="font-bold text-2xl pb-2 mt-20 md:hidden">
                Enter email or phone
              </div>
              <div className="grid grid-cols-2 bg-input text-xl font-semibold p-1 font-outfit rounded-md w-96 z-10">
                <div
                  className={`cursor-pointer p-2 rounded-md transition-colors duration-200 ${
                    active === "email" ? "bg-gray-500 text-white" : "text-gray-600"
                  }`}
                  onClick={() => {
                    setActive("email");
                    navigate("/register");
                  }}
                >
                  Email
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-md transition-colors duration-200 ${
                    active === "phone" ? "bg-gray-500 text-white" : "text-gray-600"
                  }`}
                  onClick={() => {
                    setActive("phone");
                    navigate("/regwphone");
                  }}
                >
                  Phone
                </div>
              </div>
              <div className="flex flex-col justify-start text-left mt-5 font-outfit z-10">
                <div className="font-semibold text-xl mt-10 mb-5">Email</div>
                <input
                  type="email"
                  placeholder="Email id"
                  className="border-2 rounded-md p-3 bg-input"
                />
              </div>
              <div className="text-blue-600 font-outfit font-semibold text-left pt-2">
                View our privacy policy
              </div>
              <div
                className="z-10 p-3 border-2 bg-loginBrown rounded-md mt-16 text-white font-outfit font-semibold text-xl"
                onClick={handleNext}
              >
                Next
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="font-bold text-3xl pb-2 mt-20 -mx-28 md:hidden">
                What's your name?
              </div>
              <div className="z-20 font-semibold text-start text-xl pb-2 mt-20 -mx-20 md:hidden">
                Display Name
                <input
                type="text"
                placeholder="Display Name"
                className="border-2 w-full rounded-md p-3 mt-4 bg-input"
              />
              </div>
              <div
                className="z-20 p-3 border-2 bg-loginBrown text-center w-full rounded-md mt-10 text-white font-outfit font-semibold text-xl"
                onClick={handleNext}
              >
                Next
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="font-bold text-3xl pb-2 mt-20 -mx-28 md:hidden">
                Set your password
              </div>
              <div className="z-30 font-semibold text-start text-xl pb-2 mt-20 -mx-20 md:hidden">
                Password
                <input
                type="password"
                placeholder="New Password"
                className=" border-2 w-full rounded-md p-3 mt-4 bg-input"
              />
              <div className="font-outfit text-gray-500 text-start text-sm py-4">
                Password must be 8 or more characters
              </div>
              </div>
              <div
                className="z-10 p-3 border-2 bg-loginBrown rounded-md mt-16 text-white font-outfit font-semibold text-xl"
                onClick={() => {
                    navigate('/')
                }}
              >
                Create Account
              </div>
              <div className="font-outfit text-gray-500 -mx-20 text-center text-sm py-4 font-medium">
                By registering, you agree to Orgface <span className="text-blue-500" >Privacy Policy</span> and <span className="text-blue-500" >Terms of service</span>
              </div>
            </>
          )}
        </div>

        <div className="font-outfit">
          <div className="font-semibold text-4xl pb-2 hidden md:block">
            Create Your Account
          </div>
          <div className="hidden md:block">
            Register with your email address
          </div>
        </div>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Email id"
            className="p-2 mt-5 bg-input text-black w-full h-12 rounded font-outfit placeholder:text-gray-500 hidden md:block"
          />
          <input
            type="text"
            placeholder="Display Name"
            className="p-2 mt-5 bg-input text-black w-full h-12 rounded font-outfit placeholder:text-gray-500 hidden md:block"
          />
          <div className="relative hidden md:block">
            <input
              type="password"
              placeholder="New Password"
              className="p-2 mt-5 bg-input text-black w-full h-12 rounded font-outfit placeholder:text-gray-500"
            />
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="absolute w-6 right-2 top-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              ></path>
            </svg>
            <div className="font-outfit text-gray-500 text-sm py-4">
              Password must be 8 or more characters
            </div>
          </div>
          <div className="hidden md:block font-outfit md:mt-5">
            <div className="text-sm text-gray-600 font-semibold-500">
              By registering, you agree to Orgface
              <span className="text-blue-600 font-semibold inline-block px-1">
                Privacy Policy
              </span>
              and
              <span className="text-blue-600 font-semibold inline-block">
                Terms of service
              </span>
            </div>
          </div>

          <div className="hidden md:block md:w-full md:text-center md:p-3 md:rounded md:font-roboto md:mt-4 md:text-white md:bg-loginBrown md:border md:font-medium">
            Create an account
          </div>

          <div className="text-gray-600 font-outfit mt-12 hidden md:block">
            Already have an account?
            <div className="inline-block text-blue-600 font-semibold">
              <a href="index.html" className="pl-1">
                Login
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:justify md:my-10">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="mx-4 text-gray-600 font-medium font-outfit">
              or
            </span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>
          <div className="hidden md:block md:w-full md:text-center md:p-3 md:rounded md:font-roboto md:mt-4 md:text-loginBrown md:bg-white md:border-2 md:font-medium md:border-loginBrown">
            <a
              onClick={() => navigate("/regwphone")}
              className="cursor-pointer"
            >
              Register with Phone number
            </a>
          </div>
        </div>
      </div>

      {/* <!-- second grid --> */}
      <div className="col-span-2 relative hidden md:block">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${rightbg})`, opacity: 0.1 }}
        ></div>

        {/* <!-- Welcome message block --> */}
        <div className="flex flex-col">
          <div className="order-2 md:order-1 hidden md:block">
            <div className="z-10 font-outfit text-4xl text-center mt-20 font-semibold text-gray-800">
              Welcome to the Orgface!
            </div>
            <div className="z-10 font-outfit text-xl text-center px-36 mt-5 font-normal text-gray-500">
              Enjoy the new experience of chatting in organization.
            </div>
          </div>

          {/* <!-- Images block --> */}
          <div className="grid grid-rows-2 gap-4 mt-8 order-1 justify-center items-center md:order-2">
            <div className="z-10">
              <img src={top} alt="" className="h-60 z-10" />
            </div>
            <div className="z-10">
              <img src={bottom} alt="" className="h-60 z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
