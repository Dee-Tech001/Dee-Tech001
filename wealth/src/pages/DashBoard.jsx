import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import {  useNavigate, Link } from 'react-router-dom';



  
//navigate and aunthenticate function
const DashBoard = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout ()
        navigate ("/")
    }

// open and close function 

    const [open, setOpen] = useState(false);
    const handleClick = ()=>setOpen(!open);

//outputting list function 



    const [items, setItems] = useState ([
      { id: 1, content: 'Refer and earn', paragraph:'Earn 2500 Cash per referral' ,  linkTo: '/refer' },
      { id: 2, content: 'Lucky Wheel', paragraph:'win up to N10, 000 daily '  }
   
    ]);


  return (
    <>
    {/* top */}
    <div className=''>
    <div className=' flex justify-between items-center '>
        <h1 className='  text-lg capitalize '>welcome user</h1>
        <h2>
        <span><i className=' fas fa-headset   px-2'></i></span>
        <span><i className=' fas fa-bell px-2'></i></span>
        </h2>
    </div>

{/* balance section */}
        <div  className=' bg-white px-4 py-5 capitalize '>
      
        
            <div className=' flex justify-between items-center space-x-2  '> 
                <h6 className=' '> balance  <i onClick={handleClick} className={` ${open? 'fas fa-eye-slash' : 'fas fa-eye'} `}></i>
                </h6>
                <h6 className=' '>transtion history<i className="fas fa-chevron-right pl-1 text-sm"> </i> </h6>
            </div>

            <p className=' text-2xl pt-3'>
               {open ? '****' : ' N5,500'}
                <span className=' block text-sm'>
                    cash back
                </span>
            </p>
            
             {/* earning structure section */}

            <div className=' flex justify-between items-center'>
            <Link to="/withdraw">
           <div className=''>
            <span className='py-4 px-6 mr-4 rounded-md bg-green-500 text-2xl text-white fas fa-arrow-down shadow-md shadow-slate-500'></span>
            <p >withdraw</p>
           </div>
           </Link>    
           <div>
            <span className='py-4 px-6  rounded-md bg-blue-500 text-2xl text-white  fas fa-gear shadow-md shadow-slate-500'></span>
            <p className=' ml-2'>setting</p>
           </div>

           <div>
            <span className='py-4 px-6  rounded-md bg-orange-500 text-xl text-white fas fa-signal shadow-md shadow-slate-500'></span>
            <p className=' ml-2'>Earning</p>
           </div>
           
            </div>

        </div>
        {/* earning section */}
        <div className="grid grid-cols-2 mt-3 ">
            <div className=' px-4 py-2 bg-white rounded-md shadow-sm mr-2'>
                <h1>Affiliate</h1>
                <span>N0.00</span>
            </div>

            <div  className=' px-4 bg-white rounded-md shadow-sm '>
                <h1>Indirect</h1>
                <span>N0.00</span>
            </div>

            <div className=' px-4 bg-white rounded-md shadow-sm mt-2 mr-2 '>
                <h1>Task Earnings</h1>
                <span>N0.00</span>
            </div>

            <div className=' px-4 bg-white rounded-md shadow-sm mt-2 '>
                <h1>Bonus</h1>
                <span>N0.00</span>
            </div>

            <div className=' grid col-span-2  px-4 bg-white rounded-md shadow-sm mt-2  '>
                <h1>All-time Affiliate Earning</h1>
                <span>N0.00</span>
            </div>

           
        </div>

{/* task section */}  
          <div className=''>
      
        {items.map((item) => (
                     <Link to={item.linkTo}>  <p  className=' bg-white text-lg   rounded-md shadow-md py-3 px-4 my-2' key={item.id}>{item.content} 
          <span className=' block text-sm'>{item.paragraph}</span>
          </p></Link>
        ))}
      
    </div>
 
       <p> <button  className='text-white py-3 px-2 bg-red-500 rounded-full hover:py-4 hover:px-4 mb-4' onClick={handleLogout}>Logout</button> </p>
       <p> <button onClick={handleLogout}>Logout</button> </p>
      
       </div>
      
        
 {/* buttom start  */}
 <div className=" bottom-0 right-0 left-0 fixed   w-screen ">
            <div className=" flex justify-around items-center pt-6 px-2  bg-white  leading-3">
                <div className=" bottom-text">
                <Link to="/">   <span><i className="fas fa-home ml-3"></i></span> 
      
        <p>Home</p>
        </Link>
                </div>

                <Link to="/reward" >
                <div className=" bottom-text">  <span><i className=" fas fa-gift ml-4"></i></span> 
        <p>Reward</p>
                </div>
                </Link>

                <Link to="/card" >
              <div className=" bottom-text">  <span><i className=" fas fa-credit-card ml-2"></i></span>
              <p>card</p></div></Link>

             <div className=" bottom-text">   <span><i className=" fas fa-user"></i></span>
             <p>Me</p></div>

            </div>

        </div>
{/* buttom end  */}



    </>
  )
}

export default DashBoard