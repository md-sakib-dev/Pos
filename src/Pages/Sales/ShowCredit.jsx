import { useFormik } from 'formik'
import React from 'react'
import { creditSlip } from '../../schemas'
import { IoMdClose } from "react-icons/io";

const ShowCredit = ({closeModal}) => {
    const initialValues={
        price:"",
       
    }
    const{values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:creditSlip,
        onSubmit:(values,action)=>{
            action.resetForm();
        }
    })
    return (
        <>
      
        <div className=' fixed inset-0 bg-black  backdrop-blur-sm bg-opacity-5 '>
        </div>
          <div className='fixed top-[50%] left-[50%] max-w-40rem transform -translate-x-1/2 -translate-y-1/2 bg-white  py-8 px-12 border rounded-lg '>
         <form className='flex flex-col justify-center md:justify-between  text-black mt-5 gap-8'onSubmit={handleSubmit}>
         <div className='flex justify-center  p-4 md:p-5  border-b-2 dark:border-gray-600'>
            
            <h1 className='font-signature text-black font-bold text-2xl text-center '>Credit Slip</h1>
            <div className='text-gray-400 bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' onClick={closeModal}>
            <IoMdClose color='black'  size={20}/>
            </div>
           </div>
           <div  className='flex flex-col md:flex-row md:justify-around gap-8'>
           <div className="mt-5 flex flex-col gap-0 ml-5">
                    <label htmlFor="serial" className='text-sm'>Payment Amount</label>
                    <input type="number" name="price" id="price" placeholder="Enter Amount" value={values.price} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
                    {errors.price && touched.price && (<p className="text-red-700 text-[12px] font-semibold">{errors.price}</p>)}
                  </div> 
                  <div className="mt-5 flex flex-col gap-0 ml-5">
                    <label htmlFor="serial" className='text-sm'>Credit Slip No</label>
                    <input type="text" name="slip" id="slip" placeholder="Enter Amount" value={values.slip} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
                    {errors.slip && touched.slip && (<p className="text-red-700 text-[12px] font-semibold">{errors.slip}</p>)}
                  </div> 

           </div>
                       
         <div className="flex justify-center py-2 mb-5 bg-red-600 mt-2 w-44 text-white  rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
         <button className="" type='submit'>Save</button>
          </div>
    
         </form>
          </div>
        
         </>
      )
}

export default ShowCredit