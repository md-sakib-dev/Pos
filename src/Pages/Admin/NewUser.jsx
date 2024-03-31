import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash ,FaUser, FaUserTag  } from "react-icons/fa";
import { BiSolidUserCheck } from "react-icons/bi";
import { useFormik } from 'formik';
import { createUserSchema } from '../../schemas';

const NewUser = () => {
  const [visible,setVisible]=useState(false)

  const initialValues= {
    name:"",
    employee_name: "",
    employee_id:"",
    password:"",
    confirm_password:"",
    Role:"",
    Branch:"",
  }
  const {values, errors,touched, handleBlur,handleChange,handleSubmit} =useFormik({

    initialValues: initialValues,
    validationSchema:  createUserSchema,
    onSubmit: (values,action)=>{
      console.log(values)
      action.resetForm();
    },
  })
  return (
    <div className='flex flex-col justify-center items-center'>

    <div className=' w-80 md:w-full mx-auto border-2  rounded-2xl mt-20'>
        <h1 className='font-signature font-bold text-2xl text-center border-b border-slate-200 py-3'>Add New User</h1>
       
      <div className='flex flex-col  justify-between items-center'>
        <div className='mt-5'>
        <form className="flex flex-col items-center  gap-2 p-2 ml-2" onSubmit={handleSubmit} >
          <div className=' flex flex-col md:flex-row justify-around gap-8'>
          <div className='flex flex-col gap-1  relative'>
        <input className="bg-transparent border-0 border-b-2 border-gray-300  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  block rounded-md w-[250px] md:w-[300px] h-10" type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder=''  />
        <label htmlFor="username" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'>
            Username
        </label>
        <div>
           <FaUser size={20} className='absolute top-4 right-4'/>
        </div>
        {errors.name && touched.name ? (<p className="text-red-700 text-[12px] font-semibold">{errors.name}</p>):null}
    </div>
          <div className=' flex flex-col  gap-1 relative'>
                        <input className=' bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  py-2.3 px-0 block rounded-md  w-[250px] md:w-[300px] h-10 ' type="text"  name='employee_name' id='employee_name'  value={values.employee_name} onChange={handleChange} onBlur={handleBlur}   placeholder="" />
                        <label htmlFor="email" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'> 
                          Employee Name
                        </label>
                        <div>

                        <FaUserTag size={20} className='absolute top-4 right-4'/>
                        </div>
                        
                {errors.employee_name && touched.employee_name ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.employee_name}</p>): null}
            
                    </div>
                    <div className=' flex flex-col  gap-1 relative'>
                        <input className=' bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  py-2.3 px-0 block rounded-md  w-[250px] md:w-[300px] h-10 ' type="number"  name='employee_id' id='employee_id'  value={values.employee_id} onChange={handleChange} onBlur={handleBlur}   placeholder="" />
                        <label htmlFor="email" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'> 
                          Employee ID
                        </label>
                        <div>

                        <BiSolidUserCheck size={20} className='absolute top-4 right-4'/>
                        </div>
                        
                {errors.employee_id && touched.employee_id ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.employee_id}</p>): null}
            
                    </div>
                    </div>
                 <div className='flex flex-col md:flex-row justify-around md:mt-2 gap-8'>
                   
            <div className='flex flex-col justify-between gap-1'>
            <p className='text-sm'>Role</p>
            <select className="border-0 border-b-2 border-gray-300  text-sm  text-black   rounded-md  w-[250px] md:w-[250px]  h-10 font-semibold" name='Role' as='select' onChange={handleChange}>
            <option value="" >Select an Role</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
            </select>
            {errors.Role && touched.Role ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.Role}</p>): null}
            </div>
               
            <div className='flex flex-col gap-1 justify-between'>
            <p className='text-sm'>Branch</p>
            <select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='Branch' as="select" onChange={handleChange}>
            <option value="" >Select an Branch</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        {errors.Branch && touched.Branch ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.Branch}</p>): null}
               </div>
               </div>
                <div className='flex flex-col md:flex-row justify-around md:mt-2 gap-8'>
                  <div>

                    <div className='flex flex-col gap-1 relative'>
                        <input className=" bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black   px-0 block rounded-md  w-[250px] md:w-[250px] h-10  " type={visible? "text" :"password"} name="password" id="password"  value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder=''  />
                        <label htmlFor="password" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'>
                            Password
                        </label>
                        <div onClick={()=>setVisible(!visible)}>

                        { visible ? <FaRegEye size={20} className='absolute top-4 right-4'/>:  <FaRegEyeSlash size={20} className='absolute top-4 right-4'/> }
                    </div>
                  </div>        
                {errors.password && touched.password ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.password}</p>): null}
                </div>  
                 
                 <div>

                
                <div className='flex flex-col gap-1 relative'>
                        <input className=" bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black  py-2.3 px-0 block rounded-md  w-[250px] md:w-[250px] h-10  " type={visible? "text" :"password"} name="confirm_password" id="confirm_password"  value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} placeholder='' />
                        <label htmlFor="password" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'>
                         Confirm  Password
                        </label>
                        <div onClick={()=>setVisible(!visible)}>

                       { visible ? <FaRegEye size={20} className='absolute top-4 right-4'/>:  <FaRegEyeSlash size={20} className='absolute top-4 right-4'/> }
                        </div>
                  </div>        
                  {errors.confirm_password && touched.confirm_password ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.confirm_password}</p>): null}
              
                  </div>
                  </div>
               
               <div className="flex justify-center py-2 mb-5 bg-red-600 mt-2 w-44 text-white  rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
              <button className="" type='submit'>Create</button>

              </div>
              
            
            

                </form>

        </div>

      </div>


    </div>
    </div>
  )
}

export default NewUser