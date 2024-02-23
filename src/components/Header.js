import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[24px] md:h-auto border-[1px] border-gray-500 flex items-center justify-end  md:block md:mb-4'>
      <div className='flex justify-end items-center w-[100%] md:hidden'>
         <div className='mr-1'>
            <img src='./Rectangle.png'alt=''></img>
         </div>
         <div className='mr-1'>
             <img src='./Oval.png'alt=''></img>
         </div>
         <div className='mr-1'> 
            <img src='./Path.png'alt=''></img>
         </div>
      </div>
      <div className=' px-10 hidden md:grid md:grid-cols-3 my-6'>
        <div  className='flex items-center'>
          <img src='./company-logo.png'alt=""></img>
        </div>
        <div className='flex items-center bg-slate-100 rounded-xl px-4 py-2 text-xs md:text-sm'>
        <img src='./searchIcon.png'alt="" className='mr-2 '></img>
        <input type="text"placeholder=' search for your favrite groups in ATG' className='outline-none bg-transparent w-[80%]'></input>
       
        </div>
        <div className='flex items-center justify-end'>
          create Accounts <span className='text-blue-600 ml-2'> it's free !</span>
          <img src='./baseline-arrow.png'alt=''></img>
        </div>
         
      </div>
    </div>
  )
}

export default Header