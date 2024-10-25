import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent form from submitting normally
    console.log("Form submitted " + email + "  " + password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 border-emerald-500 rounded-lg h-1/2 w-96 flex justify-center ">
        <form
          action=""
          className="flex flex-col items-center justify-center"
          onSubmit={submitHandler}
        >
          <h1 className="flex justify-center text-4xl  m-12">
            Login{" "}
            <marquee>
              <span>.....</span>
            </marquee>
          </h1>
          <input
            type="text"
            placeholder="Enter your Email"
            className="border-2 border-emerald-600 py-4 px-6 rounded-full outline-none  bg-transparent text-white placeholder:text-gray-400 m-4 "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="border-2 border-emerald-600 py-4 px-6 rounded-full outline-none  bg-transparent text-white placeholder:text-gray-400 "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="border-2 border-emerald-600 py-4 px-24 rounded-full outline-none bg-transparent text-white m-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
