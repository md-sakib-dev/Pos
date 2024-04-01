import { useFormik } from 'formik';
import React from 'react'
import { IoMdClose } from "react-icons/io";
import { walletschema } from '../../schemas';

const Wallet = ({closeModal}) => {
    const initialValues={
      tform:"",
      code:"",
    }


    const{values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema:walletschema,
            onSubmit :(values, action)=>{
              action.resetForm();
            }
    
        })
        return (
            <>
          
            <div className=' fixed inset-0 bg-black  backdrop-blur-sm bg-opacity-5    '>
            </div>
              <div className='fixed top-[50%] left-[50%] max-w-40rem transform -translate-x-1/2 -translate-y-1/2 bg-white  py-8 px-12 border rounded-lg '>
             <form className='flex flex-col justify-center md:justify-between text-black mt-5 gap-8'onSubmit={handleSubmit}>
             <div className='flex justify-end border-b-2  dark:border-gray-600'>
                
                <h1 className='font-signature text-black font-bold text-2xl text-center '>Wallet</h1>
                <div className='text-gray-400 bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' onClick={closeModal}>
                <IoMdClose color='black'  size={20}/>
                </div>
               </div>
               <div  className='flex flex-col md:flex-row md:justify-around gap-8'>
               <div className='flex flex-col gap-1'>
              <p className='text-sm'>Transfer form</p>
        <select className="border-2 border-gray-300 text-sm   text-black   rounded-md  w-36 h-10 font-semibold"   name='tform' as='select'  value={values.tform} onChange={handleChange} >
                    <option value="" >Select an form</option>
                    <option value="Admin">A</option>
                    <option value="Admin">B</option>     
                </select>
                {errors.tform && touched.tform ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.tform}</p>): null}
            </div>
                    
               <div className=" flex flex-col gap-1 ">
                        <label htmlFor="serial" className='text-sm'>Available</label>
                        <input type="number" name="available" id="available" placeholder="" value={values.available} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-36"/>
                  
                      </div>
                      <div className=" flex flex-col gap-1 ">
                        <label htmlFor="serial" className='text-sm'>Transfer</label>
                        <input type="number" name="transfer" id="transfer" placeholder="" value={values.transfer} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-36"/>
                  
                      </div>
               </div>
               <div className='flex flex-col md:flex-row md:justify-around gap-8 mt-5 items-center'>
               <div className="flex justify-center py-2  bg-red-600 mt-2 w-44 text-white  rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
             <button className="" type='submit'>Transfer Request</button>
              </div>
                <div className='flex justify-between items-center gap-2'>
               <div className=" flex flex-col gap-2 ">
                        <label htmlFor="serial" className='text-sm'>Enter validation Code</label>
                        <input type="number" name="code" id="code" placeholder="Enter Code" value={values.code} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-44"/>
                        {errors.code && touched.code ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.code}</p>): null}
                      </div>
                      <div className="flex justify-center py-2  bg-red-600 mt-2 w-44 text-white  rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
             <button className="" type='submit'>Redeem</button>
              </div>
  
                </div>
               </div>
             </form>
              </div>
            
             </>
          )
    }
 


export default Wallet