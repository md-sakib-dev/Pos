import { useFormik } from 'formik'
import React from 'react'
import { Invoice } from '../../schemas'

const SearchInvoice = () => {
  const initialValues= {
    from:"",
    to:"",
  }
  const{values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:Invoice,
    onSubmit :(values, action)=>{
      action.resetForm();
    }


  }) 
  return (
    <div className='w-full h-full mx-auto mt-16'>
      <form class=" mt-5 flex flex-col gap-2 md:flex-row md:gap-4 items-center  "  onSubmit={handleSubmit}>
      <div className=" flex flex-col gap-2 ">
                        <label htmlFor="serial" className='text-sm'>Enter validation Code</label>
                        <input type="date" name="from" id="from" placeholder="Enter Code" value={values.from} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-44"/>
                        {errors.from && touched.from ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.from}</p>): null}
                      </div>
                      <div className=" flex flex-col gap-2 ">
                        <label htmlFor="serial" className='text-sm'>Enter validation Code</label>
                        <input type="date" name="to" id="to" placeholder="Enter Code" value={values.to} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-44"/>
                        {errors.to && touched.to ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.to}</p>): null}
                      </div>
  <button class=" text-sm px-4 py-2  bg-red-600 w-60 md:w-44 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mt-2">Load</button>
</form>
<div className='text-center font-bold mt-5'>
  <h1>Report Goes here</h1>
</div>

    </div>
  )
}

export default SearchInvoice