import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";
import logo  from  '/assets/logo.png';


const RootLayout = () => {
    const [open, setOpen] = useState(false);
    const handleClick = ()=>setOpen(!open);
     const {auth}  = useAuth();
     const protect = <NavLink to="/log" > <i className="fas fa-right-to-bracket "> </i> Sign In </NavLink>
     if (!auth || !auth.user) {
        // Handle the case when 'auth' or 'auth.user' is not define

        
      }
    return   (
        < >
        {/* header start */}
        <div className=" w-full fixed left-0 right-0 top-0 
        bg-white shadow-md z-[1000]">
           
            <div className=" md:flex justify-between 
            items-center  py-4 md:py-6  px-8 md:px-10  z-[1000] ">

                <div className="  text-blue-800 uppercase my-4 md:my-0  
                flex justify-between text-2xl items-center">
                    
                    <div>
                    <Link to="/"><img src={logo} alt="" className=" absolute w-40 -top-4  h-28 md:-top-7" /></Link> 
                    </div>
                    <div>
                    <button  onClick={handleClick} className="   text-xl 
                     rounded-tr-xl rounded-bl-xl  z-50   py-1  px-2 w-8  bg-red-500    md:invisible">

              <i  className={  open?  'fas  fa-times text-white' : 'fas fa-bars-staggered text-white'} > </i> 
</button>
                    </div>
                </div>
         
<ul  className= {`transition-all  z-40 md:flex top-26  mx-0 bg-white pb-9  md:pb-0 pl-8 pt-6 items-center  md:p-0  absolute md:static duration-700 ease-in  shadow-md md:shadow-none ${open? ' left-18 ': '  -left-96 invisible md:visible duration-300'  } z-50 `} >

<li onClick={handleClick}>
<NavLink to="/"> 
<i className=" fas fa-home md:invisible">
    </i> Home
</NavLink>
</li>

<li onClick={handleClick} >
<NavLink to="dashboard" ><i className=" fas fa-grip md:invisible"></i> Dashboard </NavLink>
</li>

<li className=" mr-5" onClick={handleClick}>
<NavLink to="buy" ><i className=" fas fa-shop md:invisible "></i> Get Code</NavLink>
</li>

<li  className="dropdown cursor-pointer  relative "> <i className="fas fa-chevron-down mr-2"></i>
    Other Pages  
    <ol className="dropdown_content hidden md:absolute md:top-[1rem] md:z-[-1000] md:pt-9 md:shadow-md bg-white px-3">
    <li onClick={handleClick}>
<NavLink to="contact" ><i className=" fas fa-phone md:invisible"></i> Contact</NavLink>
</li>
<li onClick={handleClick} >
<NavLink to="terms" > <i className=" fas fa-file-alt md:invisible"></i> Terms </NavLink>
</li>
    </ol>

</li>

<li className=" mr-5" onClick={handleClick}>  
<NavLink to="about" >
<i className=" fas fa-circle-info md:invisible ">
</i> About 
</NavLink>
</li>



<li  onClick={handleClick}>

{protect}


</li>

</ul>
            </div>
        </div>
        {/* header end */}

  
             


<main className= " mt-[6rem] mx-5 md:mx-26">
<Outlet />
</main>

      </> );
}
 
export default RootLayout;