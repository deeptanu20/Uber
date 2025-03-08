import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      username: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="./logo-uber.png"></img>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>

          <div className="flex gap-4 mb-5">
            <input
              type="text"
              placeholder="Firstname"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            ></input>

            <input
              type="text"
              placeholder="Lastname"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            ></input>
          </div>

          <h3 className="text-base font-medium mb-2">
            What's your phone number or email?
          </h3>
          <input
            type="email"
            placeholder="email@gmail.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          ></input>
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          ></input>
          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 text-lg w-full">
            Sign up
          </button>
        </form>
        <p className="text-center">
          Already have a acount?
          <Link to="/login" className="text-blue-700">
            Login here
          </Link>
        </p>
      </div>

      <p className="text-[10px] leading-tight">
        This site is protected by reCAPTCHA and the{" "}
        <span className="underline">Google Privacy Policy</span> and{" "}
        <span className="underline">Terms of Service apply</span>.
      </p>
    </div>
  );
};

export default UserSignup;
