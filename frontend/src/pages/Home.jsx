import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel'

const Home = () => {
  const [ pickup, setPickup ] = useState('')
  const [ destination, setDestination ] = useState('')
  const[panelOpen,setPanelOpen]=useState(false);
  const panelRef=useRef(null);
  const panelCloseRef=useRef(null);
  const submitHandler=(e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,
        {
          height:'70%',
          paddingLeft:20

        }
      )

      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,
        {
          height:'0%',
          

        }
      )

      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])
  return (
    <div className='h-screen relative'>
    <img className='w-20 absolute left-5 top-5' src='logo-uber.png'/>

    <div className='h-screen w-screen'>
      
      <img  className='h-full w-full object-cover' src='https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif' alt='uber' />
    </div>
    <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
      <div className='h-[30%] bg-white p-6 relative'>
        <h5 ref={panelCloseRef}onClick={()=>{
          setPanelOpen(false)
        }} className='absolute top-6 right-6 text-2xl opacity-0'>
        <i className="ri-arrow-down-wide-line"></i>
        </h5>
      <h4 className='text-2xl font-semibold'>Find a trip</h4>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-900 rounded-full "></div>
        <input
        onClick={()=>{
          setPanelOpen(true)
        }}
        type='text'
        placeholder='Add a Pickup location'
        value={pickup}
        onChange={(e)=>{
            setPickup(e.target.value)
        }}
        className='bg-[#eee] px-10 py-2 text-base rounded-lg w-full mt-5'
        />

        <input
        onClick={()=>{
          setPanelOpen(true)
        }}
        type='text'
        placeholder='Enter your destination location'
        value={destination}
        onChange={(e)=>{
            setDestination(e.target.value)
        }}
         className='bg-[#eee] px-10 py-2 text-base rounded-lg w-full mt-3'
        />
      </form>
      </div>

      <div ref={panelRef} className='bg-white h-0'>
              <LocationSearchPannel/>
      </div>
    </div>
    </div>
  )
}

export default Home
