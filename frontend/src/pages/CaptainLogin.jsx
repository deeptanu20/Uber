import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'


const CaptainLogin = () => {
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [captainData, setCaptainData] = useState({});
   
     const submitHandler = (e) => {
       e.preventDefault();
       setCaptainData({
         email: email,
         password: password,
       });
       console.log(captainData);
       setEmail("");
       setPassword("");
     };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
          <div>
            <img className="w-16 mb-10" src="./Uber-Emblem.png"></img>
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <h3 className="text-lg font-medium mb-2">
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
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              ></input>
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input
                required
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              ></input>
              <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 text-lg w-full">
                Login
              </button>
            </form>
            <p className="text-center">
              Join a flet?
              <Link to="/captain-signup" className="text-blue-700">
                Register as a Captain
              </Link>
            </p>
          </div>
    
          <Link to='/login' className="bg-[#f7993a] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 text-lg w-full">
            Sign in as User
          </Link>
        </div>
  )
}

export default CaptainLogin
