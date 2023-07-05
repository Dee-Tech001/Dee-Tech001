import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";


const RootLayout = () => {
    const [mobile, setMobile] = useState(true);
    return   (
        < >
        
        <header className="fixed md:flex shadow-black justify-between items-center  
        right-0 left-0 m-0  px-6 py-4  w-[100%] z-50 bg-blue-400 ">
<div className=" text-3xl capitalize font-bold text-white ">
    <Link to="/">cool wealth</Link>
</div>

<nav     className={ mobile? 'invisible md:visible  md:z-50' : 'visible   '  } >
<button  onClick={()=>setMobile(!mobile)}>{
    mobile? <i className="  fas fa-bars-staggered text-purple-900 "></i> : <i  className=" fas fa-times 
     text-purple-900  px-2"></i> 
}
</button>
        
<ul   onClick={()=>setMobile(!mobile)} className= {'absolute bg-black  md:static  md:flex  left-0 px-5 top-16  md:bg-transparent w-60 md:w-auto items-center pt-16 md:p-0 h-screen md:h-0 transition-all ease-in duration-200  z-50'} >
<li >
<NavLink to="/"> Home</NavLink>
</li>
<li >
<NavLink to="about" > About </NavLink>
</li>
<li >
<NavLink to="sponsor" >Sponsored </NavLink>
</li>
<li >
<NavLink to="contact" > Contact</NavLink>
</li>
<li >
<NavLink to="terms" > Terms </NavLink>
</li>
<li >
<NavLink to="user" > <i className="fas fa-right-to-bracket text-white"> </i> Sign In </NavLink>
</li>
</ul>
</nav>
</header>
<div></div>
<main className= "   py-20 px-5  " >
<Outlet />
</main>

      </> );
}
 
export default RootLayout;