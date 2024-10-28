import React, { useState } from "react";
import rightbg from "./right-bg.png";
import top from "./top.png";
import bottom from "./bottom.png";
import { useNavigate } from "react-router-dom";
import org from "./org-build.png";
import { ClipLoader } from "react-spinners";
import { FiCheckCircle } from "react-icons/fi";

export default function Registerwphone() {
  const navigate = useNavigate();
  const [active, setActive] = useState("phone");
  const [modal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const openModal = () => {
    setOpenModal(!modal);
  };

  const regwemail = () => {
    navigate("/register");
  };

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVerified(true);
      setTimeout(() => {
        navigate("/register");
      }, 2000); // Navigate after showing the verification icon for a short time
    }, 3000);
  };

  return (
    <div className="flex justify-center align-middle md:grid md:grid-cols-4">
      {/* <!-- first grid --> */}
      <div className="col-span-2 justify-center align-middle m-28">
        <div className="bg-orange-100 rounded-3xl w-max mb-8">
          <img src={org} alt="Org" className="md:h-28 hidden md:block" />
        </div>
        <div className="font-outfit">
          <div className="font-semibold text-4xl pb-2 hidden md:block">
            Create Your Account
          </div>
          <div className="hidden md:block">
            Register with your email address
          </div>
        </div>

        {/* <!-- responsive form --> */}
        <div className="flex flex-col justify-center align-middle text-center md:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${rightbg})`, opacity: 0.07 }}
          ></div>
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
            <div className="font-semibold text-xl mt-10 mb-5">Phone Number</div>
            <div>
              <select className="p-2 mt-5 mr-1 bg-input text-black w-20 h-12 rounded font-outfit placeholder:text-black">
                <option value="+91">IN +91</option>
                <option value="+61">KWT +965</option>
              </select>
              <input
                type="number"
                placeholder="Phone number"
                className="border-2 rounded-md p-3 w-72 bg-input"
              />
            </div>
          </div>
          <div className="text-blue-600 font-outfit font-semibold text-left pt-2">
            View our privacy policy
          </div>
          <div
            className="z-10 p-3 border-2 bg-loginBrown rounded-md mt-16 text-white font-outfit font-semibold text-xl"
            onClick={openModal}
          >
            Next
          </div>
        </div>

        {/* <!-- OTP modal --> */}
        {modal && (
          <div className="fixed inset-0 bg-gray-800 font-outfit bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white rounded-lg w-80 p-6 shadow-lg">
              <h2 className="text-2xl font-bold font-outfit text-gray-800 text-center">
                Enter your OTP
              </h2>
              <p className="text-sm text-gray-500 mt-2 text-center">
                An OTP was sent to +91 79*** *****
              </p>

              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-loginBrown text-center text-lg tracking-widest"
                />
              </div>

              <div className="mt-6 justify-between">
                <button
                  className="bg-loginBrown w-full text-white rounded px-4 py-2"
                  onClick={handleVerify}
                  disabled={loading || verified}
                >
                  <div className="flex justify-center items-center">
                    {loading ? (
                      <>
                        <ClipLoader
                          color={"#FFFFFF"}
                          loading={loading}
                          size={25}
                        />
                        <span className="pl-4">Verifying</span>
                      </>
                    ) : verified ? (
                      <>
                        <FiCheckCircle color={"#FFFFFF"} size={25} />
                        <span className="pl-4">Verified</span>
                      </>
                    ) : (
                      <>
                        <span className="pl-4">Verify</span>
                      </>
                    )}
                  </div>
                </button>
                <div className="grid grid-cols-4 mt-2">
                  <div className="col-span-1 text-left">1:24</div>
                  <div className="col-span-3 font-outfit text-sm">
                    Didn't get the code?
                    <span className="text-blue-600 text-sm font-semibold font-outfit pl-1">
                      Send again
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-5">
          <div className="hidden md:flex">
            <select className="p-2 mt-5 mr-1 bg-input text-black w-1/4 h-12 rounded font-outfit placeholder:text-black">
              <option value="+91">IN +91</option>
              <option value="+61">KWT +965</option>
            </select>
            <input
              type="text"
              placeholder="Phone Number"
              maxLength="10"
              className="p-2 mt-5 bg-input text-black w-3/4 h-12 rounded font-outfit placeholder:text-gray-500 hidden md:block"
            />
          </div>
          <div className="relative hidden md:block"></div>
          <div className="hidden md:block md:font-outfit md:mt-5">
            <div className="text-sm text-gray-600 font-semibold-500">
              Visit our
              <span className="text-blue-600 font-semibold inline-block pl-1">
                Privacy Policy
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div
              className="uppercase w-full text-center p-3 rounded text-white font-outfit bg-loginBrown md:hidden"
              onClick={() => {
                navigate("/register");
              }}
            >
              <a>Register</a>
            </div>
            <div className="uppercase w-full text-center p-3 rounded font-outfit mt-4 text-white border border-loginBrown font-semibold md:text-white md:bg-loginBrown">
              <button onClick={openModal}>Send OTP</button>
            </div>
          </div>

          <div className="text-gray-600 font-outfit mt-12 hidden md:block">
            Already have an account?
            <div className="inline-block text-blue-600 font-semibold">
              <a className="pl-1">Login</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-my-10">
              <hr className="flex-1 border-t border-gray-300" />
              <span className="mx-4 text-gray-600 font-medium font-outfit">
                or
              </span>
              <hr className="flex-1 border-t border-gray-300" />
            </div>
            <div
              className="w-full text-center p-3 rounded font-outfit mt-4 text-white border border-loginBrown font-semibold md:text-white md:bg-loginBrown md:cursor-pointer"
              onClick={regwemail}
            >
              <a>Register with Email</a>
            </div>
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
}
