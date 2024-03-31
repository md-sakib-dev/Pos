import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { editGetProductSchema } from '../../schemas'

const GetProduct = () => {
  const initialValues={
    product:"",
  }
  const{values,errors,touched,handleBlur,handleChange,handleSubmit} =useFormik({
    initialValues:initialValues,
    validationSchema:editGetProductSchema,
    
    onSubmit:(values)=>{
      
    }
  })
  return (
    <div className='mt-20 w-full h-full mx-auto '>     
      <h1 className='text-center text-3xl font-signature font-semibold'>Product Info</h1>
      <div class=" mt-5 flex flex-col gap-2 md:flex-row md:gap-4 items-center " onSubmit={handleSubmit}>
         <div className='flex flex-col gap-0.5'>
         <input type="text" name="product" id="product"  value={values.product} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Barcode" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-[250px]"/>
         {errors.product && touched.product ? (<p className="text-red-700 text-[12px] font-semibold">{errors.product}</p>):null}
         </div>
  <button class=" px-4 py-2  bg-red-600  w-52 text-white text-sm  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Load</button>
  <button class=" px-4 py-2  bg-red-600  w-60 text-sm text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Get Product Properties</button>
</div>
<div className='flex flex-col justify-center items-center'>
   <div className='mt-5  border w-80 md:w-full  rounded-lg'>
    <div className='flex flex-col md:flex-row justify-around items-center mt-2'>
      <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Group</label>
     <input type="text" name="group" id="group" placeholder="" class="border-2 bg-gray-200  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Type</label>
  <input type="text" name="type" id="type" placeholder="" class="border-2  bg-gray-200  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col'>
      <label for="id" class="mb-2 text-sm">Category</label>
     <input type="text" name="category" id="category" placeholder="" class=" border-2 bg-gray-200  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
    </div>
    <div className=' flex flex-col md:flex-row justify-around items-center mt-0 md:mt-5'>
    <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Style</label>
      <input type="text" name="style" id="style" placeholder="" class="border-2 bg-gray-200   border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Brand</label>
      <input type="text" name="brand" id="brand" placeholder="" class="border-2 bg-gray-200  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>

      <div className='flex flex-col '>
  <label htmlFor="password" className="mb-2 text-sm">Size</label>
  <input type="password" id="size" name="size" placeholder="" className=" border-2 bg-gray-200  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10  font-semibold" />
</div>

    </div>
    <div className='flex flex-col ml-9 md:ml-11'>
  <label htmlFor="password" className="mb-2 text-sm">Color</label>
  <input type="password" id="color" name="color" placeholder="" className=" border-2 bg-gray-200  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10  font-semibold" />
</div>
<div className='flex justify-between mt-5 items-center'>

    <button class=" px-4 py-2  bg-red-600  w-32 text-white  rounded-lg  text-sm hover:opacity-90 hover:text-black hover:bg-emerald-500  mb-2 ml-4">Delete</button>
    <Link to="/edituser" class="px-4 py-2  bg-red-600  w-32 text-white text-sm text-center rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-2 mr-4">Edit</Link>
</div>

    </div>

    </div>
      </div>
  )
  
}

export default GetProduct