import React from 'react'
import { Link } from 'react-router-dom'

const EditUser = () => {
  return (
    <div className='mt-20 w-full h-full mx-auto '>
      

      <h1 className='text-center text-3xl font-signature font-semibold'>USER LIST</h1>
      <div class=" mt-5 flex flex-col gap-2 md:flex-row md:gap-4 items-center ">
  <input type="text" name="id" id="id" placeholder="Enter ID" class="border border-gray-300 rounded-md px-3 py-2 mb-4 w-[250px]"/>
  <button class=" px-4 py-2  bg-red-600  w-28 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Load</button>
</div>
<div className='flex flex-col justify-center items-center'>
   <div className='mt-5  border w-80 md:w-full  rounded-lg'>
    <div className='flex flex-col md:flex-row justify-around items-center mt-2'>
      <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">User Name</label>
     <input type="text" name="name" id="name" placeholder="" class="border-2  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Employee Name</label>
  <input type="text" name="employee_name" id="employee_name" placeholder="" class="border-2  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col'>
      <label for="id" class="mb-2 text-sm">Employee ID</label>
     <input type="text" name="id" id="id" placeholder="" class=" border-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
    </div>
    <div className=' flex flex-col md:flex-row justify-around items-center mt-0 md:mt-5'>
    <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Employee Role</label>
      <input type="text" name="Role" id="Role" placeholder="" class="border-2  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>
      <div className='flex flex-col '>
      <label for="id" class="mb-2 text-sm">Employee Branch</label>
      <input type="text" name="Branch" id="Branch" placeholder="" class="border-2  border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"/>
      </div>

      <div className='flex flex-col '>
  <label htmlFor="password" className="mb-2 text-sm">Password</label>
  <input type="password" id="password" name="password" placeholder="" className=" border-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10  font-semibold" />
</div>

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

export default EditUser