import React, { useState } from "react";
import org from "./org-build.png";
import rightbg from "./right-bg.png";
import top from "./top.png";
import bottom from "./bottom.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [toggleLogin, setToggleLogin] = useState(false);

  const handleLogin = () => {
    setToggleLogin(!toggleLogin);
    console.log("LOGIN: ", toggleLogin);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {/* first grid */}
      <div class="col-span-2 flex-block justify-center align-middle md:p-20 md:pt-30">
        <div className="m-16">
          <div className="bg-orange-100 rounded-3xl w-max mb-8">
            <img src={org} alt="Org" class="md:h-28 hidden md:block" />
          </div>
          <div class="font-outfit">
            <div class="font-semibold text-4xl pb-2 hidden md:block">
              Welcome back!
            </div>
            <div class="hidden md:block">
              Log in with your email Id or phone number to enter.
            </div>
          </div>

          <div id="loginFields" class="hidden md:block">
            <input
              type="text"
              placeholder="Email or phone number"
              class="p-2 mt-5 bg-input text-black w-full h-12 rounded placeholder:font-outfit placeholder:text-gray-500"
            />
            <div class="relative">
              <input
                type="password"
                placeholder="Password"
                class="p-2 mt-5 bg-input text-black w-full h-12 rounded placeholder:font-outfit placeholder:text-gray-500"
              />
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="absolute w-6 right-2 top-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </div>
          </div>

          <div class="hidden md:grid grid-cols-2 font-outfit mt-5 sm:hidden">
            <div class="text-sm flex gap-1 text-gray-600 font-semibold-500">
              <input type="checkbox" /> Keep me logged in
            </div>
            <div class="text-sm text-right text-blue-600 font-semibold">
              Forgot your password?
            </div>
          </div>

          <div class="text-gray-600 font-outfit mt-12 hidden md:block">
            Need an account?
            <div
              class="inline-block text-blue-600 font-semibold cursor-pointer"
              onClick={() => {
                navigate("/register");
              }}
            >
              <a className="pl-1 cursor-pointer">Register</a>
            </div>
          </div>
        </div>

        {/* Responsive */}
        <div className="col-span-2 relative pb-10">
          {toggleLogin ? (
            <div className="block md:hidden">
              <>
              <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${rightbg})`, opacity: 0.1 }}
                ></div>
                <div className="font-bold text-4xl text-center text-gray-700 pb-2 mt-20 md:hidden">
                  Welcome back!
                </div>
                <div className="text-center text-xl font-normal p-3 text-gray-500 font-outfit">
                  Login with your email or phone number to enter
                </div>
                <div className="flex flex-col justify-start text-left mt-5 px-8 font-outfit z-10">
                  <div className="font-semibold text-xl mt-10 mb-5">
                    Account information
                  </div>
                  <input
                    type="email"
                    placeholder="Email or phone number"
                    className="border-2 rounded-md p-3  bg-input"
                  />
                  <div class="relative">
                    <input
                      type="password"
                      placeholder="Password"
                      class="p-2 mt-5 bg-input text-black w-full h-12 rounded placeholder:font-outfit placeholder:text-gray-500"
                    />
                    <svg
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      class="absolute w-6 right-2 top-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="text-blue-600 font-outfit font-semibold text-right py-4 px-8 pt-2">
                  Forgot your password?
                </div>
                <div className="z-10 p-3 border-2 bg-loginBrown rounded-md text-center mx-8 mt-16 text-white font-outfit font-semibold text-xl">
                  Next
                </div>
              </>
            </div>
          ) : (
            <div>
              {/* Images block */}
              <div className="flex flex-col -mt-16 md:hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${rightbg})`, opacity: 0.1 }}
                ></div>
                <div className="relative grid grid-rows-2 gap-4 mt-8 order-1 justify-center items-center">
                  <div className="z-10">
                    <img src={top} alt="top" className="h-60 z-10" />
                  </div>
                  <div className="z-10">
                    <img src={bottom} alt="bottom" className="h-60 z-10" />
                  </div>
                </div>
              </div>

              {/* Welcome message */}
              <div className="mt-10">
                <div className="md:hidden">
                  <div className="font-outfit text-3xl text-center font-semibold text-gray-800">
                    Welcome to the Orgface!
                  </div>
                  <div className="font-outfit text-xl p-6 text-center font-medium text-gray-500">
                    Enjoy the new experience of chatting in organization.
                  </div>
                </div>
                <div className="px-10">
                  <div
                    className="w-full text-center p-3 rounded text-white font-outfit bg-loginBrown cursor-pointer md:hidden"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </div>
                  <div
                    className="uppercase w-full text-center p-3 rounded font-outfit mt-4 bg-transparent text-loginBrown border-2 border-loginBrown font-semibold md:text-white md:bg-loginBrown"
                    onClick={handleLogin}
                  >
                    Login
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* responsive ends here */}
      </div>

      {/* second grid */}
      <div class="col-span-2 relative hidden md:block pb-10">
        <div
          class="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${rightbg})`, opacity: 0.1 }}
        ></div>

        {/* <!-- Welcome message block --> */}
        <div class="flex flex-col">
          <div class="order-2 md:order-1 hidden md:block">
            <div class="z-10 font-outfit text-4xl text-center mt-20 font-semibold text-gray-800">
              Welcome to the Orgface!
            </div>
            <div class="z-10 font-outfit text-2xl text-center px-36 mt-5 font-normal text-gray-500">
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
}
