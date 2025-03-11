import React  from 'react'
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignUp = () => {
  const navigate=useNavigate();
   
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    const [vehicleColor,setVehicleColor]=useState('');
    const [vehiclePlate,setVehiclePlate]=useState('');
    const [vehicleCapacity,setVehicleCapacity]=useState('');
    const [vehicleType, setVehicleType] = useState('car');



     const {captain,setCaptain}= React.useContext(CaptainDataContext)
    

    
  
    const submitHandler = async(e) => {
      e.preventDefault();
      const captainData={
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email: email,
        password: password,
        vehicle:{
          color:vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }

      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);

      if(response.status===201){
        const data=response.data
        setCaptain(data.captain);
        localStorage.setItem('token',data.token);
        navigate('/captain-home');
      }




      
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');


    }


  return (
        <div className="px-5 py-5 h-screen flex flex-col justify-between">
          <div>
            <img className="w-16 mb-10" src="./Uber-Emblem.png"></img>
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

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option> 
            </select>
          </div>
              <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 text-lg w-full">
                Create Captain Account
              </button>
            </form>
            <p className="text-center">
              Already have a acount?
              <Link to="/captain-login" className="text-blue-700">
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
  )
}

export default CaptainSignUp
