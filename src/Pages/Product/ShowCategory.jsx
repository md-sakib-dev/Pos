import { useFormik } from 'formik'
import React from 'react'
import { IoMdClose } from "react-icons/io";
import { mergeCategory } from '../../schemas';

const ShowCategory = ({closeModal}) => {
    const initialValues={
        category:"",
        newcategory:"",
    }
   const{values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
        validationSchema: mergeCategory,
        onSubmit :(values, action)=>{
          action.resetForm();
        }

    })
  return (
    <>
  
    <div className='  fixed inset-0 bg-black  backdrop-blur-sm bg-opacity-5 '>
    </div>
      <div className='fixed top-[50%] left-[50%] max-w-40rem transform -translate-x-1/2 -translate-y-1/2 bg-green-200  py-8 px-12 border rounded-lg'>

    <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
        
     <h1 className='font-signature text-black font-bold text-2xl text-center '>Merge Group</h1>
     <div className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' onClick={closeModal}>
     <IoMdClose color='black'  size={20}/>
     
     </div>
    </div>
     <form className='flex flex-col justify-center md:justify-around items-center text-black mt-5 gap-8'onSubmit={handleSubmit}>
     <div className='flex flex-col md:flex-row md:justify-around gap-8'>
     <div className='flex flex-col gap-5'>
      <p className='text-sm'>Orginal Category Name</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold" name='category' as='select'  value={values.category} onChange={handleChange} >
            <option value="" >Select a Category</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.category ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.category}</p>): null}
    </div>
    <div className='flex flex-col gap-5'>
      <p className='text-sm'>Category Name To Be Changed</p>
<select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-[250px] md:w-[250px] h-10 font-semibold"   name='newcategory' as='select'  value={values.newcategory} onChange={handleChange} >
            <option value="" >Select a Category</option>
            <option value="Admin">Admin</option>
            <option value="Branch Manager">Branch Manager</option>
            <option value="Pos Operator">Pos Operator</option>
            <option value="Pos Verifier">Pos Verifier</option>
        </select>
        {errors.newcategory ? (<p className=" text-red-700 text-[12px]  font-semibold">{errors.newcategory}</p>): null}
    </div>
     </div>
     <div className="flex justify-center py-2 mb-5 bg-red-600 mt-2 w-44 text-white  rounded-lg h-9 hover:opacity-90 hover:text-black hover:bg-emerald-500">
     <button className="" type='submit'>Merge</button>
      </div>

     </form>
      </div>
    
     </>
  )
}

export default ShowCategory