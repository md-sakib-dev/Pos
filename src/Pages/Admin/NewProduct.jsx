import { useFormik } from 'formik'
import React from 'react'
import { addProductSchema } from '../../schemas'
import { Link } from 'react-router-dom'

const NewProduct = () => {
  const initialValues={
    group:"",
    category:"",
    size:"",
    name:"",
    brand:"",
    type:"",
    message:"",
    price:"",
    house:"",

  }
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema: addProductSchema,
    onSubmit:(values,action)=>{
      action.resetForm();
    }
  })
  return (
    <div className='mt-20 w-full h-full mx-auto '>
      <div className='flex flex-col justify-center items-center'>

       <h1 className='text-center text-3xl font-signature font-semibold'>Add New Product</h1> 
    <div className='text-center md:text-left mt-5'>
  
    <Link to="/editproduct" class="px-4 py-2  bg-red-600  w-32 text-white  rounded-lg   hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-2 mt-2">Edit Product</Link>
    </div>

        <form className='mt-5  border w-80 md:w-full  rounded-lg' onSubmit={handleSubmit}>

        <div className=' flex flex-col md:flex-row justify-around items-center mt-2 md:mt-5 gap-2 '>
    <div>
      <p className='text-sm'>Group</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='group' as='select' onChange={handleChange} >
            <option value="" >Select a Group</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.group && touched.group ?(<p className=" text-red-700 text-[12px]  font-semibold">{errors.group}</p>): null}
    </div>
    <div>
      <p className='text-sm'>Category</p>
    <select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='category' as='select' onChange={handleChange}>
            <option value="" >Select an Category</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.category && touched.category ?(<p className=" text-red-700 font-semibold text-[12px] ">{errors.category}</p>): null}
    </div>
    <div>
      <p className='text-sm'>Size</p>
    <select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='size' as='select' onChange={handleChange}>
            <option value="" >Select an Size</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.size && touched.size ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.size}</p>): null}
    </div>
</div>
<div className='flex flex-col md:flex-row justify-around items-center mt-2 md:mt-5 gap-2'>
<div className='flex flex-col gap-1'>
    <p className='text-sm'>Product Name</p>
   <input  type="text" name="name" id="name" placeholder="Prouct Name" className=' ' value={values.name} onChange={handleChange} onBlur={handleBlur}   class="border-0 border-b-2 border-gray-300 text-sm  text-black   rounded-md  w-[250px] md:w-[250px] h-10  font-semibold"/>
   {errors.name && touched.name ? (<p className="text-red-700 text-[12px] font-semibold">{errors.name}</p>):null}
    </div>
    <div>
      <p className='text-sm'>Brand</p>
    <select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='brand' as='select' onChange={handleChange}>
            <option value="" >Select a Brand</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.brand && touched.brand ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.brand}</p>): null}
    </div>
    <div className=''>
    <select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='type' as='select' onChange={handleChange}>
            <option value="" >Select a Type</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.type && touched.type ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.type}</p>): null}
    </div>
    


</div>
<div className=' flex flex-col md:flex-row justify-around items-center md:items-start mt-2 md:mt-5 gap-5  '>
<div>
  <p className='text-sm'>Warehouse</p>
  <select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='house' as='select' onChange={handleChange}>
            <option value="" >Select a Warehouse</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.house && touched.house ?(<p className=" text-red-700 text-[12px] font-semibold">{errors.house}</p>): null}
  </div>
  <div className=''>
  <div className='flex flex-col gap-0 '>
    <p  class="text-sm">Product Price</p>
   <input  type="number" name="price" id="price"  value={values.price} onChange={handleChange} onBlur={handleBlur} placeholder='enter price'  class="border-0 border-b-2 border-gray-300 text-sm  text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
   {errors.price && touched.price ? (<p className="text-red-700 text-[12px] font-semibold">{errors.price}</p>):null}
    </div>
  </div>
  <div>
  <textarea id="message" name="message" rows="2" cols="10" placeholder="Enter Product's description" class="border text-sm border-gray-300 rounded-md px-3 py-2  w-64 resize-none"></textarea>
  {errors.message && touched.message ? (
    <p className="text-red-700 text-[12px] font-semibold">{errors.message}</p>
  ) : null}

  </div>
  
  

</div>

<div className='flex justify-center  items-center'>

  <button class=" px-4 py-2  bg-red-600  w-32 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500  mb-2 ml-4">ADD</button>
  
</div>
        </form>
       

      </div>
      </div>
  )
}

export default NewProduct