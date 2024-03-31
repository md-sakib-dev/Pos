import { useFormik } from 'formik'
import React from 'react'
import { editUserSchema } from '../../schemas'

const EditUser = () => {
    const initialValues= {
        name:"",
        employee_name: "",
        employee_id:"",
        password:"",
        confirm_password:"",
        Role:"",
        Branch:"",
      }

      const {values, errors,touched, handleBlur,handleChange,handleSubmit} =  useFormik({
        initialValues: initialValues,
    validationSchema:  editUserSchema,
    onSubmit: (values,action)=>{
      console.log(values)
      action.resetForm();
    },

    })
  return (
    <div className='mt-20 w-full h-full mx-auto '>
    <h1 className='text-center text-3xl font-signature font-semibold'>Edit User List</h1>
    <div class=" mt-5 flex gap-4 items-center ">
<input type="text" name="id" id="id" placeholder="Enter ID" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
<button class=" px-4 py-2  bg-red-600  w-28 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Load</button>
</div>
 <form className='mt-5  border w-80 md:w-full  rounded-lg' onSubmit={handleSubmit}>
  <div className='flex flex-col md:flex-row justify-around items-center mt-2'>
    <div className='flex flex-col gap-1'>
    <label for="id" class="mb-2 text-sm">User Name</label>
   <input  type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder=''  class="border  border-gray-300 rounded-md px-2 py-2 mb-2 w-48"/>
   {errors.name && touched.name ? (<p className="text-red-700 font-semibold">{errors.name}</p>):null}
    </div>
    <div className='flex flex-col gap-1'>
    <label for="id" class="mb-2 text-sm">Employee Name</label>
<input type="text"  name='employee_name' id='employee_name'  value={values.employee_name} onChange={handleChange} onBlur={handleBlur}   placeholder="" class="border text-sm border-gray-300 rounded-md px-2 py-2 mb-4 w-48"/>
{errors.employee_name && touched.employee_name ?(<p className=" text-red-700 font-semibold">{errors.employee_name}</p>): null}
    </div>
    <div className='flex flex-col gap-1'>
    <label for="id" class="mb-2 text-sm">Employee ID</label>
   <input type="number"  name='employee_id' id='employee_id'  value={values.employee_id} onChange={handleChange} onBlur={handleBlur}   placeholder="" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48"/>
   {errors.employee_id && touched.employee_id ?(<p className=" text-red-700 font-semibold text-sm">{errors.employee_id}</p>): null}
    </div>
  </div>
  <div className=' flex flex-col md:flex-row justify-around items-center mt-0 md:mt-5'>
    <div>
<select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-48 h-10 font-semibold" name='Role' as='select' onChange={handleChange} >
            <option value="" >Select an Role</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.Role && touched.Role ?(<p className=" text-red-700 font-semibold">{errors.Role}</p>): null}
    </div>
    <div className=''>
    <select className="bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer text-sm text-black py-2.3 px-0 block rounded-md w-48  h-10 font-semibold" name='Branch' as='select' onChange={handleChange}>
            <option value="" >Select an Branch</option>
            <option value="Admin">JFP</option>
            <option value="Branch Manager">Mirpur</option>
            <option value="Pos Operator">Chattoagram</option>
            <option value="Pos Verifier">Sylhet</option>
        </select>
        {errors.Branch && touched.Branch ?(<p className=" text-red-700 font-semibold">{errors.Branch}</p>): null}
    </div>

    <div className='flex flex-col gap-1'>
<label htmlFor="password" className="mb-2 text-sm">Password</label>
<input type="password" name="password" id="password"  value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='' className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-48" />
{errors.password && touched.password ?(<p className=" text-red-700 font-semibold">{errors.password}</p>): null}
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

export default EditUser