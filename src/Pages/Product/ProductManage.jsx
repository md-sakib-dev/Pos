import { useState } from 'react'
import ShowMerge from '../Product/ShowMerge'
import ShowType from '../Product/ShowType'
import ShowCategory from './ShowCategory'
import ShowBrand from './ShowBrand'
import ShowSize from './ShowSize'

const ProductManage = () => {
  const [showModal,setShowModal]=useState(false)
  const closeModal=()=>{
    return setShowModal(false)
  }
  return (
    <div className='w-80 md:w-full h-full mx-auto border-2 bg-green-500 rounded-2xl mt-20 text-white'>
      
     <h1 className='ffont-signature font-bold text-2xl text-center border-b border-slate-100 py-3'>Product Merge</h1>
     <div className='flex flex-col md:flex-row justify-center md:justify-around items-center md:items-center mt-5'>
     <button onClick={()=>{setShowModal(true)}} class=" px-4 py-2  bg-red-600  w-44 text-white text-sm  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Merge Group</button>
     {showModal && <ShowMerge closeModal={closeModal}/>}
  <button onClick={()=>{setShowModal(true)}} class=" px-4 py-2  bg-red-600  w-44 text-sm text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Merge Type</button>
  {showModal && <ShowType closeModal={closeModal}/>}
  <button onClick={()=>{setShowModal(true)}} class=" px-4 py-2  bg-red-600  w-44 text-sm text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Merge Category</button>
  {showModal && <ShowCategory closeModal={closeModal}/>}
  <button onClick={()=>{setShowModal(true)}} class=" px-4 py-2  bg-red-600  w-44 text-sm text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Merge Brand</button>
  {showModal && <ShowBrand closeModal={closeModal}/>}
  <button onClick={()=>{setShowModal(true)}} class=" px-4 py-2  bg-red-600  w-44 text-sm text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Merge Size</button>
  {showModal && <ShowSize closeModal={closeModal}/>}
     </div>

         
      
      
    </div>
  )
}

export default ProductManage