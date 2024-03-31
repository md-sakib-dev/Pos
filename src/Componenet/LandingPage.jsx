import React from 'react';
import { TfiReload } from "react-icons/tfi";
import pic2 from '../assets/sales.png';
import pic3 from '../assets/arrival.png'
import { PiPantsFill } from "react-icons/pi";
import { IoShirtSharp } from "react-icons/io5";
import { GiMonclerJacket } from "react-icons/gi";
import pic4 from '../assets/arrive.jpg'
import img from '../assets/sales.jpg'
import foot from '../assets/logo.png'

const LandingPage = () => {
  const Cardlist = [
    {
      name: "Sales Today",
      p: "2.53",
      percent: "+28%",
      p1: "Since Last Month",
      b: "Today",
    },
    {
      name: "Visitors",
      p: "170.212",
      percent: "-14%",
      p1: "Since Last Month",
      b: "Annual",
    },
    {
      name: "Total Earnings",
      p: "$24.300",
      percent: "+18%",
      p1: "Since Last Month",
      b: "Monthly",
    },
    {
      name: "Sales Today",
      p: "2.53",
      percent: "+28%",
      p1: "Since Last Month",
      b: "Today",
    },
  ];
  const data = [
    { id: 1, col1: 'Row 1', col2: 'Data 1', col3: 'Data 2', col4: 'Data 3', col5: 'Data 4' },
    { id: 2, col1: 'Row 2', col2: 'Data 5', col3: 'Data 6', col4: 'Data 7', col5: 'Data 8' },
    { id: 3, col1: 'Row 3', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12' },
    { id: 4, col1: 'Row 4', col2: 'Data 13', col3: 'Data 14', col4: 'Data 15', col5: 'Data 16' },
  ];

  return (
    <div className='w-full max-h-full text-black mt-20 '>
      <div className='flex flex-col md:flex-row justify-between  gap-5 border-b border-b-slate-300 py-5'>
        <div>
          <h1 className='text-2xl font-signature font-semibold'>Admin Dashboard</h1>
          <p className='mt-2'>Welcome Back, We've missed you.👏</p>
        </div>
        <div className='flex items-center gap-5'>
          <TfiReload size={20} color='green' />
          <button className='text-white py-2 px-3 bg-green-500'>Today: March 14</button>
        </div>
      </div>
      <div className='mt-5 grid md:grid-cols-4 gap-8 '>
        {Cardlist?.map((item, index) => {
          return (
            <div key={index} className='flex justify-between w-72 md:w-full rounded-lg bg-slate-200'>
              <div className='flex flex-col justify-between ml-3'>
                <div className='flex justify-between w-full'>
                  <p className='text-lg font-medium'>{item.name}</p>
                  <button className='text-white px-1 rounded-lg bg-green-500'>{item.b}</button>
                </div>
                <p className='text-2xl font-bold'>{item.p}</p>
                <div className='flex gap-6'>
                  <p className='text-green-500'>{item.percent}</p>
                  <p className='text-sm font-normal'>{item.p1}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-10 flex flex-col md:flex-row items-center justify-around gap-8'>
        <div>
        <h1 className='text-2xl text-center font-signature font-bold mb-5'>Sales Revenue</h1>
        <img src={pic2} alt="Sales Revenue" className='mx-auto' />
        </div>
        <div className='border-2 rounded-xl gap-2  h-full flex flex-col justify-between items-center'>
          <h1 className=' text-xl font-semibold mb-1'>Upcomig</h1>
         
          <img className=' py-3' src={pic4} width={80} alt="" />
          <span className='w-full border-b border-b-slate-300'></span>
          <div className='flex flex-col justify-between gap-4'>
           <div className='flex justify-between items-center gap-8'>
           <PiPantsFill size={20}/>
            <p>New Jeans Pant</p>
            <p>$80</p>
           </div>
           <div className='flex justify-between gap-8'>
           <IoShirtSharp size={20}/>
            <p>Shirts</p>
            <p>$50</p>
           </div>
           <div className='flex justify-between gap-8'>
           <GiMonclerJacket size={20}/>
            <p>Jackets</p>
            <p>$250</p>
           </div>
           <div className='flex justify-between gap-8'>
           <GiMonclerJacket size={20}/>
            <p>Jackets</p>
            <p>$125</p>
           </div>
           <div className='flex justify-between gap-8'>
           <PiPantsFill size={20}/>
            <p>Jackets</p>
            <p>$300</p>
           </div>

          </div>

        </div>
      </div>
          <div className='flex flex-col justify-between items-center gap-2 md:w-full mt-5'>
            <h1 className='text-xl font-semibold '>Per Year Sales</h1>
            <img src={img} alt="" />
        </div>   
        <div className='flex flex-col justify-between  mt-5 gap-4 '>
          <h1 className='text-xl font-semibold'>Recent Orders</h1>
          <table className='border-2 rounded-lg 'style={{ borderSpacing: '10px', width: '100%' }}>
      <thead className='border-b text-md md:text-md font-bold border-b-slate-300'>
        <tr>
          <th>TRACKING NO.</th>
          <th>PRODUCT NAME</th>
          <th className='tablet-and-desktop-only'>TOTAL ORDER</th>
          <th className='tablet-and-desktop-only'>STATUS</th>
          <th>TOTAL BiLL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr className='text-center' key={row.id}>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td  className='tablet-and-desktop-only'>{row.col3}</td>
            <td className='tablet-and-desktop-only'>{row.col4}</td>
            <td>{row.col5}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>  
       

    </div>
  );
};

export default LandingPage;
