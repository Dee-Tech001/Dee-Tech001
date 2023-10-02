import { useState } from "react";
import logo  from  '/assets/logo.png';
import { useNavigate } from "react-router";


const Card = () => {
    
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/dashboard')
    }
    const [selectedBank, setSelectedBank] = useState('');
    const [bankName, setBankName] = useState('');

    const handleChange = (event) => {
      setSelectedBank(event.target.value);
    };
  
    const banks = [
      'Access Bank',
      'Zenith Bank',
      'Guaranty Trust Bank (GTBank)',
      'First Bank of Nigeria',
      'United Bank for Africa (UBA)',
      'Union Bank of Nigeria',
      'Fidelity Bank',
      'Sterling Bank',
      'Ecobank Nigeria',
      'Polaris Bank',
      'First City Monument Bank (FCMB)',
      'Wema Bank',
      'Heritage Bank',
      'Keystone Bank',
      'Stanbic IBTC Bank',
      'Standard Chartered Bank',
      'Citibank Nigeria',
      'Jaiz Bank',
      'Unity Bank',
      'SunTrust Bank',
      'Opay', 
      'Palmpay',
        'Kuda',
       'Moniepoint'
    ];
  
  return (
    <div className="mt-36 mx-40 ">
      
  
      <div className=" flex justify-center leading-9 "> 
    
    <form action="submit" className=" bg-white py-4 px-8 rounded-md shadow-md">    
    <i onClick={handleClick} className=" fas fa-arrow-left  text-red-500 text-lg"></i>
    <img src={logo} alt=""  className=" mx-20 w-36 h-32"/>
    <h2>Select a Nigerian Bank</h2>
      <select value={selectedBank} onChange={handleChange}>
        <option value="">Select a bank</option>
        {banks.map((bank, index) => (
          <option key={index} value={bank}>
            {bank}
          </option>
        ))}
      </select>
      {selectedBank && <p>Bank: {selectedBank}</p>}
      <h1>Input Account Name</h1>
      <input type="text" onChange= {(e)=>{  setBankName (e.target.value);}} className=" bg-red-200 focus:bg-red-100 ring-slate-100  ring-4"/>
      <p>Name: {bankName}</p>
      

      <button className=" bg-red-500 py-1 px-4 rounded-full">Submit</button>
       
    </form>
    </div>


    </div>
  )
}

export default Card