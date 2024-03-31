import React, { useState } from 'react'
import {useFormik} from 'formik'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import pic from '../assets/pic.png'
import { signInSchema } from '../schemas';
import pic2 from '../assets/logo.png'
const initialValues={
  email: "",
  password: "",
};

const Login = () => {  
  const [visible,setVisible] =useState(false)
const {values,touched, errors,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema: signInSchema,
    onSubmit:(values)=>{
console.log(values);
    },
  });
 
 
  return (
    <div className=' flex flex-col h-[100vh]'>

    <div className='flex flex-col flex-1 justify-center items-center '>

    <div className=' flex flex-col gap-2 md:justify-center  md:items-center  w-[280px] md:w-[450px] '>
        <div className=' relative flex flex-col md:justify-center md:items-center shadow-lg bg-fuchsia-200 border border-slate-400 backdrop-filter backdrop-blur-sm bg-opacity-30  rounded-lg'>
            <div className='ml-20 md:ml-6 '>
            {/* <img className='w-28' src={pic} alt="" /> */}
            <h1 className='text-2xl mt-5 font-signature  text-black'>artisanPOS</h1>
            <span className="left-0 bottom-0 w-full h-1 bg-black"></span>

            </div>
            <div >
                <h1 className='text-lg mt-4 font-medium ml-20 md:ml-8'>Artisan Outfitters Limited</h1>
            </div>
            <div>
                <form className="flex flex-col gap-3 p-2 ml-2" onSubmit={handleSubmit}>
                    <div className=' flex flex-col gap-3 relative'>
                        <input className=' bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  py-2.3 px-0 block rounded-md  w-[250px] md:w-[300px] h-10 ' type="email"  name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="" />
                        <label htmlFor="email" className='absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'> 
                          Email
                        </label>
                        <div>

                        <MdEmail size={20} className='absolute top-4 right-4'/>
                        </div>
                        {errors.email && touched.email ? (
                <p className=" text-red-700 font-semibold">{errors.email}</p>
              ) : null}
                    </div>
                    <div className='flex flex-col gap-3 relative'>
                        <input className=" bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  py-2.3 px-0 block rounded-md  w-[250px] md:w-[300px] h-10 " type={visible? "text" :"password"}  name="password" id="password" placeholder=''  value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        <label htmlFor="password" className='absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'>
                            Password
                        </label>
                        <div onClick={()=>setVisible(!visible)}>

                       { visible ? <FaRegEye size={20} className='absolute top-4 right-4'/>:  <FaRegEyeSlash size={20} className='absolute top-4 right-4'/> }
                        </div>
                        {errors.password && touched.password ? (
                <p className=" text-red-700 font-semibold">{errors.password}</p>
              ) : null}
                
               </div>
               <div className=' flex justify-between '>
                {/* <div className='flex justify-center items-center gap-2'>
                    <input  type="checkbox" name="right" id="right"/>
                    <p className="text-sm sm:text-md font-bold">Remember Me</p>

                </div>
                <div>
                <a to="" className=" text-sm sm:text-md  font-semibold mb-2 cursor-pointer text-black hover:text-blue-800">
                  Forgot password?
                </a>
              </div> */}
                

               </div>
               <div className="flex justify-center py-2 mb-5 bg-red-600 mt-2 text-white rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
              <button className="">Login</button>
            </div>
            

                </form>
            </div>
            



        </div>

    </div>
    </div> 
    <div className='h-1/10'>
      
      
    <div className='border bg-white h-24 '>
      <div className='flex justify-center md:justify-between '>
        <img className='md:ml-10 mt-2 w-[150px]' src={pic2} alt='' />
      </div>

    </div>
    </div>   
    </div>

  )
}

export default Login