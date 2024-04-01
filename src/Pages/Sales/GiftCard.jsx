import { useFormik } from 'formik';
import React from 'react'
import { IoMdClose } from "react-icons/io";
import { Giftcardschema } from '../../schemas';

const GiftCard = ({closeModal}) => {
    const initialValues={
       issue:"",
        voucher:"",
        voucherno:"",
        amount:"",
        tamount:"",
        code:"",
    }


    const{values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema:Giftcardschema,
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
                
                <h1 className='font-signature text-black font-bold text-2xl text-center '>Gift Card</h1>
                <div className='text-gray-400 bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' onClick={closeModal}>
                <IoMdClose color='black'  size={20}/>
                </div>
               </div>
               <div  className='flex flex-col md:flex-row md:justify-around gap-8'>
               <div className='flex flex-col gap-1'>
              <p className='text-sm'>Issue Type</p>
        <select className="border-2 border-gray-300 text-sm   text-black   rounded-md  w-36 h-10 font-semibold"   name='issue' as='select'  value={values.issue} onChange={handleChange} >
                    <option value="" >Select an issue</option>
                    <option value="Admin">A</option>
                    <option value="Admin">B</option>     
                </select>
                {errors.issue && touched.issue ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.issue}</p>): null}
            </div>
                      <div className='flex flex-col gap-1'>
              <p className='text-sm'>Voucher Type</p>
        <select className="border-2  border-gray-300 text-sm   text-black   rounded-md  w-36 h-10 font-semibold"   name='voucher' as='select'  value={values.company} onChange={handleChange} >
                    <option value="" >Select a voucher</option>
                    <option value="Admin">Admin</option>
                    <option value="Branch Manager">Branch Manager</option>
                    <option value="Pos Operator">Pos Operator</option>
                    <option value="Pos Verifier">Pos Verifier</option>
                </select>
                {errors.voucher && touched.voucher ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.voucher}</p>): null}
            </div>
                    
               <div className=" flex flex-col gap-1 ">
                        <label htmlFor="serial" className='text-sm'>Voucher NO</label>
                        <input type="number" name="voucherno" id="voucherno" placeholder="Enter voucher" value={values.voucherno} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-36"/>
                  
                      </div>
                      <div className=" flex flex-col gap-1 ">
                        <label htmlFor="serial" className='text-sm'>Voucher Amount</label>
                        <input type="number" name="amount" id="amount" placeholder="Enter Amount" value={values.amount} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-36"/>
                  
                      </div>
               </div>
               <div className='flex flex-col md:flex-row md:justify-around gap-8 mt-5'>
                <div className='flex justify-between items-center gap-2'>
               <div className=" flex flex-col gap-1 ">
                        <label htmlFor="serial" className='text-sm'>Total Amount</label>
                        <input type="number" name="tamount" id="tamount" placeholder="Enter Amount" value={values.tamount} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-44"/>
                      </div>
                      <div className="flex justify-center py-2  bg-red-600 mt-2 w-44 text-white  rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
             <button className="" type='submit'>Request</button>
              </div>
    

                </div>

                <div className='flex justify-between items-center gap-2'>
               <div className=" flex flex-col gap-1 ">
                        <label htmlFor="serial" className='text-sm'>Enter Verification Code</label>
                        <input type="number" name="code" id="code" placeholder="" value={values.code} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-44"/>
                      </div>
                      <div className="flex justify-center py-2  bg-red-600 mt-2 w-44 text-white  rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
             <button className="" type='submit'>Apply Discount</button>
              </div>
    

                </div>
               </div>
                       
        
             </form>
              </div>
            
             </>
          )
    }
 


export default GiftCard