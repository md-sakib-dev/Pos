import { useFormik } from 'formik'
import React from 'react'
import { editLabelSchema } from '../../schemas'

const LabelPrint = () => {
  const initialValues={
    label:"",
  }
  const{values,errors,touched,handleBlur,handleChange,handleSubmit} =useFormik({
    initialValues:initialValues,
    validationSchema:editLabelSchema,
    onSubmit:(values)=>{
      
    }
  })
  return (
    <div className='mt-20 w-full h-full mx-auto'>
 <div class=" mt-5 flex flex-col gap-2 md:flex-row md:gap-4 items-center "  onSubmit={handleSubmit}>
  <div className='flex flex-col gap-0.5'>
  <input type="text" name="label" id="label" value={values.label} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Barcode" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-[250px]"/>
  {errors.label && touched.label ? (<p className="text-red-700 text-[12px] font-semibold">{errors.label}</p>):null}
  </div>
  <button class="text-sm px-4 py-2  bg-red-600  w-60 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Generate</button>
  <button class="text-sm px-4 py-2  bg-red-600  w-60 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">BSTI Label</button>
  <button class=" text-sm px-4 py-2  bg-red-600 w-60 md:w-44 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Search Product</button>
</div>
<div className='text-center font-bold mt-5'>
  <h1>Report Goes here</h1>
</div>
    </div>
  )
}

export default LabelPrint