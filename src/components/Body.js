import React, { useState } from 'react'
import { ItemCard, data } from './ItemCards'

const Body = () => {
    const [dataList ,setDataList] = useState(data)

  return (
    <div>
        <div className='h-[px> w-[100%] relative'>
            <img src ="./Rectangle 2.png"alt=''></img>
           
            <img src ="./Rectangle 3.png"alt='' className='absolute top-0 bg-transparent left-0 right-0 w-full'></img>
            <div className='relative -top-[60px] text-white pl-4'>
            <p className='font-bold'>Computer Engineering</p>
            <p className='font-thin'>142,765 computer Engineers follow this</p>
            </div>
            <div className='absolute top-0 right-4 left-2.5 mt-[16px] flex items-center justify-between'>
               <div className=''><img src='./arrow.png'alt=''></img></div>
               <button type='button ' className=' text-white text-xs border-[2px]    border-white rounded-lg w-[76px] h-[28px] '>Join Group
               </button>
            </div>
           
      

        </div>
        <div className='flex justify-between px-4'>
            <div>
                Posts(368)
            </div>
            <div className='bg-slate-50 flex p-1'>
                <button>Filter: All</button>
                <img src='./baseline-arrow.png'alt=''></img>
            </div>
        </div>
        {dataList.map((data)=>(
<ItemCard data={data} />
        ))}
       
        
    </div>
  )
}

export default Body