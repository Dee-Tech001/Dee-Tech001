import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'


const Refer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate ("/dashboard");



    //counter function

    const [count, setCount] = useState(0);
    
    // Function to handle the button click
    const handleIncrement = () => {
      setCount(count + 1);
    };

    useEffect(() => {
      // Check if 24 hours have passed, and reset the count
      const timer = setInterval(() => {
        setCount(0);
      }, 24 * 60 * 60 * 1000);
  
      // Cleanup the timer when the component unmounts
      return () => clearInterval(timer);
    }, []);

    

  }
  return (
    <>
    {/* top */}
    <div className="flex  justify-between items-center px-8
     bg-white  fixed top-0 right-0 left-0  z-[1000] 
     pb-14 font-thin text-3xl capitalize ">


<h1 onClick={handleClick} ><i className=' fas fa-chevron-left pr-3'></i>earn money</h1>

<h1>rules</h1>
    </div>

{/* main */}
    <div className=" w-full bg-red-300 mt-28 py-2 " >
      <div className="bg-white  px-8 uppercase justify-center rounded-md  mx-4  ">
        <h1 className="text-3xl   ">Affiliate Earning </h1>
        <p className="   ">invite 1 new user and get </p>
        <p className= " text-5xl text-white">N2500</p>
      </div>

      <p className="flex bg-white  my-2 mx-4 rounded-3xl 
      py-4 animate-pulse  hover:animate-bounce justify-center    items-center" > Earn N3500</p>

<div>
  <div className=' bg-white mx-4 mb-3 px-16 py-6'>
<p  className=' capitalize'>my referral link </p>
  <span className=' bg-red-200 px-4  py-3 rounded-full hover:bg-red-100 ease in transition duration-300 delay-300'>copy referral code</span>   
  </div>



 {/* Earning */}
    <div className=' bg-white mx-4  py-3 justify-center'>
      <p className=' mb-8  flex justify-center'>Earning Structure</p>
      <div className=' flex justify-around items-center  mx-4'> 
        <p className="fas fa-link  text-2xl text-white  bg-red-300 rounded-full px-2 py-2 "></p>
       <span> <i className=' fas fa-arrow-right text-3xl '></i> </span>
       
      <p className="fas fa-users  text-xl text-white  bg-red-300 rounded-full px-2 py-2 "></p>
      <span><i className=' fas fa-arrow-right text-3xl mx-4'></i></span>

      <p className="fas fa-link  text-2xl text-white  bg-red-300 rounded-full px-2 py-2"></p>
      
    </div>
    <div className="flex justify-around bg-white ">
      <p className=' text-center mr-4 '>share link</p>
      <p className=' text-center '>friends accept invite</p>
      <p className=' text-center '>Friends add money</p>
    </div>
    </div>
    </div>

    <div className="bg-white rounded-md mx-4 py-2 px-3 mt-3 justify-center">
      <div className='  text-sm'>
        <h1 className=' text-xl capitalize'>how to earn</h1>
        <p>When your friend complete the task below</p>
        <p>Register with 4000</p>
      </div>
      
        
    
    </div>

    </div>
    </>
  )
}

export default Refer