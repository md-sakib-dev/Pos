import React from 'react'
import { useFormik } from 'formik'
import { editProductSchema } from '../../schemas'

const EditProduct = () => {
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
    validationSchema: editProductSchema,
    onSubmit:(values,action)=>{
      action.resetForm();
    }
  })
  return (
    <div className='mt-20 w-full h-full mx-auto '>
    <h1 className='text-center text-3xl font-signature font-semibold'>Edit Product List</h1>
    {/* <div class=" mt-5 flex gap-4 items-center ">
<input type="text" name="id" id="id" placeholder="Enter Barcode" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
<button class=" px-4 py-2  bg-red-600  w-28 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Load</button>
</div> */}
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
{errors.group && touched.group ?(<p className=" text-red-700 text-sm  font-semibold">{errors.group}</p>): null}
</div>
<div className=''>
<p className='text-sm'>Category</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='category' as='select' onChange={handleChange}>
    <option value="" >Select an Category</option>
    <option value="Admin">JFP</option>
    <option value="Branch Manager">Mirpur</option>
    <option value="Pos Operator">Chattoagram</option>
    <option value="Pos Verifier">Sylhet</option>
</select>
{errors.category && touched.category ?(<p className=" text-red-700 font-semibold w-full break-words">{errors.category}</p>): null}
</div>
<div className=''>
<p className='text-sm'>Size</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='size' as='select' onChange={handleChange}>
    <option value="" >Select an Size</option>
    <option value="Admin">JFP</option>
    <option value="Branch Manager">Mirpur</option>
    <option value="Pos Operator">Chattoagram</option>
    <option value="Pos Verifier">Sylhet</option>
</select>
{errors.size && touched.size ?(<p className=" text-red-700 font-semibold">{errors.size}</p>): null}
</div>
</div>
<div className='flex flex-col md:flex-row justify-around items-center mt-2 md:mt-5 gap-2'>
<div className='flex flex-col gap-0'>
<label for="id" class=" text-sm">Product Name</label>
<input  type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder=''  class="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
{errors.name && touched.name ? (<p className="text-red-700 text-[12px] font-semibold">{errors.name}</p>):null}
</div>
<div className='flex flex-col justify-between '>
<p className='text-sm'>Group</p>
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
<p className='text-sm'>Type</p>
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
<div className=' flex flex-col md:flex-row justify-around items-center md:items-start mt-2 md:mt-5 gap-2'>
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
<label for="id" class=" text-sm">Product Price</label>
<input  type="number" name="price" id="price" value={values.price} onChange={handleChange} onBlur={handleBlur} placeholder=''  class="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
{errors.price && touched.price ? (<p className="text-red-700 text-[12px] font-semibold">{errors.price}</p>):null}
</div>
</div>
<div>
<textarea id="message" name="message" rows="2" cols="6" placeholder="Enter Product's description" class="border border-gray-300 rounded-md px-3 py-2  w-64 resize-none"></textarea>
{errors.message && touched.message ? (
<p className="text-red-700 text-[12px] font-semibold">{errors.message}</p>
) : null}

</div>



</div>

<div className='flex justify-between  items-center'>

<button class=" px-4 py-2  bg-red-600  w-32 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500  mb-2 ml-4">Delete</button>
  <button to="/edituser" class="px-4 py-2  bg-red-600  w-32 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-2 mr-4">Update</button>

</div>
</form>

  </div>
  )
}

export default EditProduct