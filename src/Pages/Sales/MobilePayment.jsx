import { useFormik } from 'formik'
import React from 'react'
import { cardPay } from '../../schemas'
import { IoMdClose } from "react-icons/io";

const MobilePayment = ({closeModal}) => {
    const initialValues={
        price:"",
        group:"",
        newgroup:"",
        mobile:"",
    }
   const{values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
        validationSchema: cardPay,
        onSubmit :(values, action)=>{
          action.resetForm();
        }

    })
  return (
    <>
  
    <div className=' fixed inset-0 bg-black  backdrop-blur-sm bg-opacity-5    '>
    </div>
      <div className='fixed top-[50%] left-[50%] max-w-40rem transform -translate-x-1/2 -translate-y-1/2 bg-green-200  py-8 px-12 border rounded-lg '>
     <form className='flex flex-col justify-center md:justify-between items-center text-black mt-5 gap-8'onSubmit={handleSubmit}>
     <div className='flex justify-center  p-4 md:p-5  border-b-2 dark:border-gray-600'>
        
        <h1 className='font-signature text-black font-bold text-2xl text-center '>Card Payment</h1>
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
              <div className='flex flex-col gap-2'>
      <p className='text-sm'>Group Name To Be Changed</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"   name='group' as='select'  value={values.group} onChange={handleChange} >
            <option value="" >Select a Group</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.group ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.group}</p>): null}
    </div>
            
       </div>
       <div className='flex flex-col md:flex-row md:justify-around gap-8'>
       <div className='flex flex-col gap-2'>
      <p className='text-sm'>Group Name To Be Changed</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"   name='newgroup' as='select'  value={values.newgroup} onChange={handleChange} >
            <option value="" >Select a Group</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.newgroup ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.newgroup}</p>): null}
    </div>
    <div className="mt-5 flex flex-col gap-0 ml-5">
                <label htmlFor="serial" className='text-sm'>Mobile No</label>
                <input type="number" name="mobile" id="mobile" placeholder="Enter Serial" value={values.serial} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
                {errors.mobile && touched.mobile && (<p className="text-red-700 text-[12px] font-semibold">{errors.mobile}</p>)}
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

export default MobilePayment