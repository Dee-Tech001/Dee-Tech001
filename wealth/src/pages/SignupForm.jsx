import React, { lazy, useState } from 'react';
import { Formik, Form, useField  } from 'formik';
import * as Yup from 'yup';
import logo from '/assets/logo.png';
import { Link} from 'react-router-dom';

const MyTextInput = ({ label, icon, icon2, handleClick,  ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-group relative">
      
    {icon && <i className={icon}></i>}
    {icon2 && <i onClick={handleClick} className={icon2}></i>}
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className="pl-8  block "  {...field} {...props} />
    {meta.touched && meta.error ? (
    <span className=" text-sm   text-red-400 ">{meta.error}</span>
  ) : null}
  </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error && <div className="error text-base font-[Poppins]">{meta.error}</div>}
    </div>
  );
};

const SignupForm = () => {

  const [open, setOpen] =  useState(false);
  const handleClick = ()=>{
                    setOpen(!open);
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    < div className='md:mx-56 lg:mx-96  mt-20 my-14 flex justify-center flex-col items-center  bg-white shadow-md '>
    <img  className=" block" src={logo} alt="" />
     
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptedTerms: false,
          jobType: '',
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          password: Yup.string()
            .required('Password required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              'Password must contain at least one uppercase, one lowercase, one number, and one special character'
            ),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),

            Coupon: Yup.string().required('coupon code required'),
            ReferralLink: Yup.string().required('refferal link required')
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setSubmitting(false);
          setFormSubmitted(true);
        }}
      >
        {({ isSubmitting }) => (

          
          <Form className="top-40 py-10  mx-3">

            <label>
            <MyTextInput 
            name="fullName" 
            type="text" 
            placeholder="Full Name" />
            </label>

         

            <label >
            <MyTextInput 
            name="email" 
            type="email" 
            placeholder="jane@formik.com" 
            icon=' top-7 left-52 fas fa-envelope absolute' />
            </label>
            <label >
            <MyTextInput 
            name="password" 
            type={open? 'text' : 'password'}
            placeholder="Password" 
            icon2={` top-7 left-52 absolute text-sm ${open? 'fas fa-eye-slash' : 'fas fa-eye' }`}
            handleClick ={handleClick}
            />
            </label>
            
            <label>
            <MyTextInput 
            name="confirmPassword"
            type={open? 'text' : 'password'}
            placeholder="Confirm Password" 
            icon2={` top-7 left-52 absolute text-sm ${open? 'fas fa-eye-slash' : 'fas fa-eye' }`}
            handleClick ={handleClick}
            /> 
            </label>

            <label>
            <MyTextInput 
            name="Coupon"
            type=''
            placeholder="Coupon Code" 
          
            /> 
            </label>

            <label>
            <MyTextInput 
            name="ReferralLink"
            type=''
            placeholder="Referal Link" 
            
            /> 
            </label>


            <MyCheckbox 
            name="acceptedTerms" 
            className="mt-3">
              I accept the terms and conditions
            </MyCheckbox>

            {formSubmitted && <div className="text-green-600">Registration successful! You can now log in.</div>}
            
            <button  disabled={isSubmitting} className=" py-1 px-3 border-0 rounded-md bg-blue-800 block ml-10 md:ml-16 lg:ml-20  text-white" type="submit"> {isSubmitting ? 'Submitting...' : 'Submit'}</button>
           <span className='ml-10 md:ml-16 lg:ml-20  text-sm'><h4 className=' text-blue-800 '><i className=' fas fa-key text-blue-800'></i> password forgot </h4> 
           <p>Get Coupon Code <Link className=' text-red-500'  to="/buy">purchae</Link></p> 
        </span>
           
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
