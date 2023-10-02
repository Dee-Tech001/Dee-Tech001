// Login.js
import React, { useContext } from 'react';
import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../AuthContext';
import logo from '/assets/logo.png';




const MyTextInput = ({label,  icon, icon2, handleClick,  ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
    
      <div className="input-group relative">
      
        {icon && <i className={icon}></i>}
        {icon2 && <i onClick={handleClick} className={icon2}></i>}
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="pl-8  block "  {...field} {...props} />
        {meta.touched && meta.error ? (
        <span className=" text-sm   text-red-400 ">{meta.error}</span>
      ) : null}
      </div>
     
    </>
  );
};




const authenticateUser = async (data) => {
  // Simulate authentication logic
  if (data.email === '' && data.password === '') {
    return { user: { id: 1, name: 'User' } }; // Replace with actual user data
  } else {
    throw new Error('Authentication failed');
  }
};
const Login = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.from || '/'; // Use the state's "from" value for redirection


  const [open, setOpen] =  useState(false);
  const handleClick = ()=>{
                    setOpen(!open);
  };

  

  return (
    < div className='md:mx-56 lg:mx-96  mt-36 my-22 flex justify-center flex-col items-center  bg-white shadow-md '>
    <img  className=" block" src={logo} alt="" />

      <Formik

  

        initialValues={{
          email: '',
          password: '',
        }}

        validationSchema={Yup.object({
      
            email: Yup.string().email('Invalid email address')
            .required('Email required'),

            password: Yup.string().required('Password required').min(6, 'Password must be at least 6 characters')
            .max(15, 'Password must be at most 15 characters'),
          
         
          
        })}


        

        //set submitting 
       // ...

 onSubmit={async (data, { setSubmitting }) => {
  try {
    const response = await authenticateUser(data);

    if (response.user) {
      // Store user data in state and local storage
      auth.login(response.user);
      navigate(redirectPath, { replace: true });
    } else {
      console.error('Authentication failed');
    }
  } catch (error) {
    console.error('Authentication error:', error);
  } finally {
    setSubmitting(false);
  }
}}
>

        <Form className="    top-40 py-10  mx-3  ">

      
          <label>Email
          <MyTextInput 
        
            name="email"
            type="email"
            placeholder="@gmail.com"            
            icon="fas fa-envelope absolute top-7 left-2"
          />
          </label>

          <label>Password
            <MyTextInput
            name="password"
            type={open ? 'text' : 'password'} 
            icon="fas fa-lock absolute top-7 left-2"
            icon2={` top-7 left-52 absolute text-sm ${open? 'fas fa-eye-slash' : 'fas fa-eye' }`}
            placeholder="password"
            handleClick={handleClick}
          />
           </label>

        

           <button className=" py-1 px-3 border-0 rounded-md bg-blue-800 block ml-10 md:ml-16 lg:ml-20  text-white" type="submit">LOGIN</button>
           <span className='ml-10 md:ml-16 lg:ml-20  text-sm'><h4 className=' text-blue-800 '><i className=' fas fa-key text-blue-800'></i> password forgot </h4> 
        <p>Don't have an account? <Link className=' text-red-500'  to="/signup">Sign Up</Link></p> 
        </span>
     
        </Form>
        </Formik>
    </div>
  );
};
export default Login;