import { useFormik } from 'formik';
import React from 'react'
import { productschema } from '../../schemas';

const ProductRecieve = () => {
  const initialValues={
    deliver:"",
    deliverno:"",
  }
  const{values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
    validationSchema:productschema,
        onSubmit :(values, action)=>{
          action.resetForm();
        }

    })
  return (
    <div className='w-full h-full mx-auto mt-16'>
      <div className='flex flex-col md:flex-row justify-between md:justify-around items-center'>
        <div className='text-2xl font-signature'>
          <p>Product Recieved</p>
        </div>
         <div className='flex justify-between gap-4'>
         <button class=" text-sm px-4 py-2  bg-red-600 w-60 md:w-44 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mt-2">Pending Challan</button>
         <button class=" text-sm px-4 py-2  bg-red-600 w-60 md:w-44 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mt-2">Download</button>

         </div>
      </div>
      <div className='mt-10 flex flex-col md:flex-row justify-around items-center'>
      <div className='flex flex-col gap-1'>
              <p className='text-sm'>Delivery Type</p>
        <select className="border-2 border-gray-300 text-sm   text-black   rounded-md  w-36 h-10 font-semibold"   name='deliver' as='select'  value={values.deliver} onChange={handleChange} >
                    <option value="" >Select an type</option>
                    <option value="Admin">A</option>
                    <option value="Admin">B</option>     
                </select>
                {errors.deliver && touched.deliver ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.deliver}</p>): null}
            </div>
            <div className=" flex flex-col gap-1 ">
                        <label htmlFor="serial" className='text-sm'>Voucher NO</label>
                        <input type="number" name="deliverrno" id="deliverno" placeholder="Enter voucher" value={values.deliverno} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-36"/>
                        {errors.deliverno && touched.deliverno ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.deliverno}</p>): null}
                  
                      </div>
                      <div>

                      <button class=" text-sm px-4 py-2  bg-red-600 w-60 md:w-44 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mt-2">Load</button>
                      </div>
                      <div className=" flex flex-col gap-1 ">
                        <label htmlFor="serial" className='text-sm'>Voucher NO</label>
                        <input type="text" name="voucherno" id="voucherno" placeholder="" value={values.voucherno} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-36"/>
                  
                      </div>


      </div>
    </div>
  )
}

export default ProductRecieve