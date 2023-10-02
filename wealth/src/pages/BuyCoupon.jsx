import { useState } from "react";
import { useNavigate } from "react-router";
import {  Link } from 'react-router-dom';

const BuyCoupon = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dashboard')
    }
    const [whatsApps, setWhatsApps] = useState([
        { contact:'03985512412', name:'Adeyinka' , id:'1', link:'https://wa.me/2348109210008' , bank:'UBA'},
        { contact:'039855112211', name:'Aderonke' , id:'2', link:'dhnnvbfhgngnhjfkldkdkjf', bank:'Access'},
        { contact:'03985512413', name:'Muyiwa' , id:'3', link:'dhnnvbfhgngnhjfkldkdkjf', bank:'UBA'},
        { contact:'03985512413', name:'Divine' , id:'4', link:'dhnnvbfhgngnhjfkldkdkjf' , bank:'GTB'},
        { contact:'03985512413', name:'Praise' , id:'5', link:'dhnnvbfhgngnhjfkldkdkjf', bank:'Lotus'},
        { contact:'03985512413', name:'Romoke' , id:'6', link:'dhnnvbfhgngnhjfkldkdkjf', bank:'Palmpay'},
        { contact:'03985512413', name:'Adetoke' , id:'8', link:'dhnnvbfhgngnhjfkldkdkjf', bank:'Paycom (Opay)'},
        { contact:'03985512413', name:'Adetola' , id:'9', link:'dhnnvbfhgngnhjfkldkdkjf', bank:'Kuda'},
        { contact:'03985512413', name:'Ololade' , id:'10', link:'dhnnvbfhgngnhjfkldkdkjf', bank:'Wema'},
        { contact:'03985512413', name:'Christopher' , id:'11', link:'dhnnvbfhgngnhjfkldkdkjf', bank:'Polaris'},
        { contact:'03985512413', name:'Sunshine' , id:'12', link:'dhnnvbfhgngnhjfkldkdkjf', bank:'Zenith'}
        
    ]);
    return (  <> 
    <div className="  py-4 ">
        <i onClick={handleClick} className=" fas fa-arrow-left pt-6 text-xl"></i>
        {whatsApps.map((whatsApp)=>(
            <Link to= {whatsApp.link} key={whatsApp.id} >
            <div className="bg-white  my-6  px-2 shadow-md pt-4 md:pl-40" > 
            <h4 className=" text-2xl mb-2"> {whatsApp.name}</h4>
            <p className="relative ">
            <span className="  py-2 px-4 text-white  bg-blue-500 tracking-wider text-lg  "> <i className=" fas fa-landmark text-white mr-3"></i>  {whatsApp.bank} </span> 
            <i className="fa-brands fa-whatsapp fa-beat bg-green-500 text-white  px-6  py-2 text-xl rounded-full shadow-slate-500 shadow-md absolute left-[16rem] md:left-[30rem] -top-2 w-0 flex justify-center items-center "></i>
          
            </p>
            </div>
            </Link>
        ))}
           
           </div>

    </>);
}
 
export default BuyCoupon;