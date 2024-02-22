import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[24px] border-[1px] border-gray-500 flex items-center justify-end'>
      <div className='flex justify-end items-center'>
         <div className='mr-1 w-[12px] h-[10px]'>
            <img src='./Rectangle.png'alt=''></img>
         </div>
         <div className='mr-1'>
             <img src='./Oval.png'alt=''></img>
         </div>
         <div className='mr-1'> 
            <img src='./Path.png'alt=''></img>
         </div>
      </div>
    </div>
  )
}

export default Header