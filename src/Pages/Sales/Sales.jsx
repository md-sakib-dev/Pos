import { useFormik } from 'formik'
import React, { useState } from 'react'
import { SaleSchema } from '../../schemas'
import ShowCard from './ShowCard'
import MobilePayment from './MobilePayment'
import ShowCredit from './ShowCredit'
import ShowGift from './ShowGift'
import Discount from './Discount'
import GiftCard from './GiftCard'
import Wallet from './Wallet'

const Sales = () => {
  const initialValues ={
    barcode:"",
    qty:"",

  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:SaleSchema,
    onSubmit: (values, action) => {
      console.log(values)
      action.resetForm();
    },
  })
  const [showCash,setShowCash]=useState(false)
  const[discount,setDiscount]=useState(false)
  const[giftCard,setGiftCard]=useState(false)
  const[wallet,setWallet]=useState(false)
  const [showCard,setShowCard]=useState(false)
 const [cardPay,setCardpay]=useState(false)
 const [mobilePay,setMobilePay]=useState(false)
 const [showMobile,setShowMobile]=useState(false)
 const[creditSlip,setCreditSlip]=useState(false)
 const[showCredit,setShowCredit]=useState(false)
 const[giftSlip,setGiftSlip]=useState(false)
 const[showGift,setShowGift]=useState(false)



  const handleCash=()=>{
    setShowCash(!showCash)
  }
  const handleCardChange = () => {
  
    setShowCard(!showCard);
   
  };
  const handleMobileChange = () => {
    setShowMobile(!showMobile);
  };
  
  const handleCredit = () => {
    setShowCredit(!showCredit); // Toggle creditSlip state
  };
  const handleGift = () => {
    setShowGift(!showGift); 
  };
  
  const closeModal=()=>{
    setCardpay(false)
    setMobilePay(false)
    setCreditSlip(false)
    setGiftSlip(false)
    setDiscount(false)
    setGiftCard(false)
    setWallet(false)
  
  }
  
    
  return (
    <div className='w-full h-full mx-auto mt-16'>
      <div className='grid md:grid-cols-[50fr,50fr] gap-1'>
      <div className='border-2 border-2xl text-black  col-span-1'>
          <div className='flex flex-col justify-between'>
            <form className='flex flex-col md:flex-row  items-center gap-5' onSubmit={handleSubmit}>
            
              <div className="mt-5 flex flex-col gap-0 ml-5">
                <label htmlFor="serial" className='text-sm'>Product Barcode</label>
                <input type="text" name="barcode" id="barcode" placeholder="Enter Serial" value={values.barcode} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-36"/>
                {errors.barcode && touched.barcode && (<p className="text-red-700 text-[12px] font-semibold">{errors.barcode}</p>)}
              </div>
              <div className="mt-5 flex flex-col gap-0 ml-5">
                <label htmlFor="serial" className='text-sm'>QTY</label>
                <input type="text" name="qty" id="qty" placeholder="Enter Serial" value={values.qty} onChange={handleChange} onBlur={handleBlur} className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-24"/>
                {errors.qty && touched.qty && (<p className="text-red-700 text-[12px] font-semibold">{errors.qty}</p>)}
              </div>
             
              
          
              <div className='flex justify-between'>
                <button type='submit' className="px-4 py-2 bg-red-600 w-28 text-white rounded-lg hover:opacity-90 hover:text-black hover:bg-emerald-500 mr-5 mt-6">Add</button>
                <button type='submit' className="px-4 py-2 bg-red-600 w-28 text-white rounded-lg hover:opacity-90 hover:text-black hover:bg-emerald-500 mr-5 mt-6">Search</button>
              </div>
              
            </form>
            <div className='mt-5 ml-5 w-90 h-96 bg-amber-200 border-2 rounded-lg mb-5 mr-5'></div>
          </div>
        </div>
        <div className='border-2 border-2xl text-black w-full h-full bg-green-500   col-span-1'>
          <div className='grid grid-cols-[50fr,50fr] gap-2'>
            <div className=' col-span-1 border-2 h-full w-full m-1 flex flex-col gap-2.5'>
            <p className='text-md font-signature  mt-2  ml-2'>Total Payabale</p>
            <div className='mt-2 ml-2 mr-2'>
        <input type="text" value="0" class="h-16 px-4 text-2xl font-semibold w-full bg-white border border-gray-300 rounded-md text-black "/>
        </div>
            <div className='flex flex-right justify-end gap-2 items-center mr-2' >
            <p className='text-[15px]'>Product Price</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36"></input>
             </div>
             <div className='flex flex-right justify-end gap-2 items-center mr-2' >
            <p className='text-[15px]'>Discount Price</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36"></input>

          </div>
          <div className='flex justify-end gap-2 items-center ml-2' >
            <p className='text-[14px]'>Adjustment Amount</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36 mr-2"></input>

          </div>
          <div className='flex justify-end gap-2 items-center ml-2' >
            <p className='text-[15px]'>Refund</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36 mr-2" ></input>

          </div>
          <div className='flex justify-end gap-2 items-center ml-2' >
            <p className='text-[15px]'>Total Recived</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36 mr-2" ></input>

          </div><div className='flex justify-end gap-2 items-center ml-2' >
            <p className='text-[15px]'>Total Due</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36 mr-2" ></input>

          </div> 
          <div className='flex justify-end gap-2 items-center ml-2'>
          <p className='text-[15px]'>Refund Type</p>
          <select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-36 mr-2 h-10 font-semibold" name='group' as='select'  value={values.group} onChange={handleChange} >
            <option value="" >Select a Type</option>
            <option value="Admin">Cash</option>
            <option value="Branch Manager">Credit Slip</option>
           </select>

          </div>
          <div className='flex justify-end gap-2 items-center ml-2' >
            <p className='text-[15px]'>CS No (Refund)</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36 mr-2" ></input>

          </div>
              

            </div>
            <div className='col-span-1 w-full h-full border m-1 flex flex-col gap-2.5'> 
            <div className=' flex justify-around items-center'>
              <p className='text-md font-signature  mt-2  ml-2'>Discount Type</p>
              <p className='text-md font-signature  mt-2  ml-2'>Discount Amount</p>
            </div>
            <div className='flex justify-around items-center'>
              <div>
              <select className="border-0 border-b-2 border-gray-300 text-sm   text-black   rounded-md  w-36 mr-2 h-10 font-semibold" name='group' as='select'  value={values.group} onChange={handleChange} >
            <option value="" >Select a Type</option>
            <option value="Admin">Cash</option>
            <option value="Branch Manager">Credit Slip</option>
            </select>
              </div>
              <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-32 mr-2" ></input>

            </div>
            <div className='flex justify-end gap-2 items-center ml-2' >
            <p className='text-[15px]'>Exchange Amount</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36 mr-2" ></input>

          </div>
          <div className='flex justify-end gap-2 items-center ml-2' >
            <p className='text-[15px]'>Customer Phone</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36 mr-2" ></input>

          </div>
          <div className='flex justify-end gap-2 items-center ml-2' >
            <p className='text-[15px]'>Customer Name</p>
            <input type="text" value="" class=" px-1  py-1 border border-gray-300  text-black w-36 mr-2" ></input>

          </div>
          <div class="flex justify-around mt-2">
  <label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" onChange={handleCash}/>
    <span class="ml-2 text-gray-700">Cash</span>
  </label>
  <label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" onChange={handleCardChange} />
    <span class="ml-2 text-gray-700">Card</span>
  </label>
  <label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" onChange={handleMobileChange} />
    <span class="ml-2 text-gray-700">Mobile Payment</span>
  </label>
</div>
<div className='flex justify-around items-center '>
<label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" onChange={ handleCredit}/>
    <span class="ml-2 text-gray-700">Credit Slip</span>
  </label>
  <label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" onChange={handleGift}/>
    <span class="ml-2 text-gray-700">Gift Voucher</span>
  </label>
</div>
{showCash && (
        <div className="flex justify-end gap-2 items-center ml-2">
          <p className='text-[15px]'>Total Received</p>
          <input
            type="text"
            value=""
            className="px-1 py-1 border border-gray-300 text-black w-36 mr-2"
          />
        </div>
      )}

      <div className='flex justify-around items-center gap-4 ml-2 mr-2'>
          <div>
        {showCard  &&  (

            <button onClick={()=>{setCardpay(true)}} class="text-sm px-2 py-2  bg-red-600  w-36 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Card Pay</button>
            )}
             
          {cardPay && <ShowCard closeModal={closeModal}/>}
          </div>
          <div>

        {showMobile && (
           <button onClick={()=>{setMobilePay(true)}} class="text-sm px-2 py-2  bg-red-600  w-36 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Mobile Pay</button>
        )} 
        {mobilePay && <MobilePayment closeModal={closeModal}/>}
          </div>
          <div>
        {showCredit && (
           <button onClick={()=>{setCreditSlip(true)}} class="text-sm px-2 py-2  bg-red-600  w-36 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Credit Slip</button>
        )} 
        {creditSlip && <ShowCredit closeModal={closeModal}/>} 
          </div>
          <div>

        {showGift && (
       <button onClick={()=>{setGiftSlip(true)}} class="text-sm px-2 py-2  bg-red-600  w-36 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Gift Voucher</button>
         )} 
       {giftSlip  && <ShowGift closeModal={closeModal}/>}
        </div>
          </div>
          <div className='flex text-center justify-center items-center mt-5'>
          <label class="inline-flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600 h-5 w-5" />
    <span class="ml-2 text-gray-700">Gift</span>
  </label>
          </div>
          <div className='mt-2 flex flex-col md:flex-row justify-around items-center'>
          <button onClick={()=>{setDiscount(true)}} class="text-sm px-2 py-2  bg-red-600  w-36 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-1">Discount</button>
          {discount && <Discount closeModal={closeModal}/>}
          <button onClick={()=>{setGiftCard(true)}} class="text-sm px-2 py-2  bg-red-600  w-36 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-1">Gift Card</button>
           {giftCard && <GiftCard closeModal={closeModal}/>} 
          </div>
          <button onClick={()=>{setWallet(true)}} class="text-sm px-2 py-2  bg-red-600  w-36 text-white  rounded-lg  hover:opacity-90 hover:text-black hover:bg-emerald-500 mb-4">Wallet</button>
          {wallet && <Wallet closeModal={closeModal}/>}
            </div>

          </div>
          
        </div>




      </div>
    </div>
  )
}

export default Sales