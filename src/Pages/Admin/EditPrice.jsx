import { useFormik } from 'formik'
import React from 'react'
import { editPriceSchema } from '../../schemas';

const EditPrice = () => {
  const initialValues={
    price:"",

  }
  const{values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema: editPriceSchema,
    onSubmit:(values,action)=>{
      action.resetForm();
    }
  })
  return (
    <div className='mt-20 w-full h-full mx-auto '>
      <h1 className='text-center text-3xl font-signature font-semibold'>Edit Price list</h1>
 <div class=" mt-5 flex gap-4 items-center ">
<input type="text" name="id" id="id" placeholder="Enter Barcode" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
<button class=" px-4 py-2  bg-red-600  w-28 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Search</button>
</div>
         <form className='mt-5  border w-80 md:w-full  rounded-lg' onSubmit={handleSubmit}>
          <div className=' flex flex-col md:flex-row justify-around items-center md:items-start mt-2 md:mt-5 gap-2'>   
              <div className='flex flex-col'>
              <label for="id" class=" text-sm">Product Name</label>
              <input type="text" value={""} class="border  border-gray-300 bg-gray-200 rounded-md px-2 py-2 mb-2 w-[250px]" />
              </div>
              <div className='flex flex-col'>
              <label htmlFor="message" className='text-sm'>Product's Description</label>
              <textarea id="message" name="message" rows="1" cols="4" class="border border-gray-300 bg-gray-200 rounded-md px-2 py-2  w-64 resize-none">  
              </textarea>
              </div>
          </div>
          <div className=' flex flex-col md:flex-row justify-around items-center mt-2 md:mt-5 '>
            <div className='flex flex-col'>
              <label for="id" class=" text-sm">Current Price</label>
              <input type="text" value={""} class="border  border-gray-300 bg-gray-200 rounded-md px-2 py-2 mb-2 w-[250px]" />
              </div>

              <div className='flex flex-col gap-0 '>
              <label for="id" class="text-sm">New Price </label>
              <input  type="number" name="price" id="price" value={values.price} onChange={handleChange} onBlur={handleBlur} placeholder=''  class="border border-gray-300 bg-gray-200 rounded-md px-2 py-2 mb-2 w-[250px]"/>
              {errors.price && touched.price ? (<p className="text-red-700 text-[12px] font-semibold">{errors.price}</p>):null}
              </div>
          </div>
          <div className='flex justify-between  items-center mt-2'>

<button class=" px-4 py-2  bg-red-600  w-32 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500  mb-2 ml-4">Delete</button>
  <button to="/edituser" class="px-4 py-2  bg-red-600  w-32 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-2 mr-4">Update</button>

</div>

         </form>
    </div>
  )
}

export default EditPrice