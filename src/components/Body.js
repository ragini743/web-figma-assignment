import React, { useState } from 'react'
import { ItemCard, data } from './ItemCards'
import Form from './Form'
const Body = () => {
    const [dataList ,setDataList] = useState(data)
    const [signIn ,setSignIn] = useState(false)
    const [logedInUser,setLogedInUser] =useState(false)
    const [email,setEmail] = useState("")
    const handleSIgnInForm = () =>{
        setSignIn(!signIn)
        
    }

   
    console.log("Loged",logedInUser)
// console.log(signIn)
  return (
    <div className='relative'>
        <div className={' w-[100%] relative '+(logedInUser?"hidden":"block") }>
            <img src ="./Rectangle 2.png"alt=''className='w-[100%]'></img>
           
            <img src ="./Rectangle 3.png"alt='' className='absolute top-0 bg-transparent left-0 right-0 w-full'></img>
            <div className='relative -top-[60px] text-white pl-4'>
            <p className='font-bold'>Computer Engineering</p>
            <p className='font-thin'>142,765 computer Engineers follow this</p>
            </div>
           
            <div className='absolute top-0 right-4 left-2.5 mt-[16px] flex items-center justify-between md:hidden'>
               <div className=''><img src='./arrow.png'alt=''></img></div>
               <button type='button ' className=' text-white text-xs border-[2px]    border-white rounded-lg w-[76px] h-[28px] ' onClick={handleSIgnInForm}>{signIn?"Leave Group":"Join Group"}
               </button>
            </div>
           
      

        </div>
        
        <div className='flex justify-between px-4'>
            <div className='md:hidden'>
                Posts(368)
            </div>
            <div className='bg-slate-50 flex p-1 md:hidden'>
                <button>Filter: All</button>
                <img src='./baseline-arrow.png'alt=''></img>
            </div>
            <div className='w-[80%] hidden md:flex justify-between border-gray-300 border-b-[1px] mx-auto pb-3 mb-6  items-center text-sm '>
                <ul className='flex justify-evenly w-[50%] md:w-[40%]'>
                    <li className=''> 
                      <a href='#all'>All Posts(32)
                      </a>
                    </li>
                    <li>     
                        <a href='#Article'>Articel
                        </a>
                    </li>
                    <li>        
                        <a href='#all'>Event
                        </a>
                    </li>
                    <li>       
                         <a href='#all'>Education
                        </a>
                    </li>
                    <li>        
                        <a href='#all'>Job
                         </a>
                    </li>
                </ul>
                <div className='flex w-[50%] justify-evenly md:w-[40%]'>
                  <div className='flex  rounded-md bg-gray-100 py-2 px-2 w-[30%]'>
                    <div className='mr-2'>Write a Post</div>
                    <img src='./baseline-arrow.png'alt=''></img>
                  </div>
                  <div className='flex w-[30%] bg-blue-600 text-white 
                   rounded-md py-2 px-2'>
                    {logedInUser&&signIn? <img src='./exitGroup.png'alt='' className='object-contain'></img>: <img src='./Vector (9).png'alt='' className='object-contain'></img>}
                 
                    <div className='ml-2'>
                    <button type='button ' className='' onClick={handleSIgnInForm}>{signIn?"Leave Group":"Join Group"}
               </button></div>
                   
                  </div>
                </div>
               
            </div>
        </div>
        {
            signIn?<div>
                <img src ="./Rectangle 3.png"alt='' className={'absolute top-0 bg-transparent left-0 right-0 w-full bottom-0 h-[100%] '+ (logedInUser?"hidden":"block")}></img>
            <Form signIn={signIn} email={email} setEmail={setEmail}  setSignIn={setSignIn} setLogedInUser={setLogedInUser} logedInUser={logedInUser} />
            </div> :null

         }

         <div className='md:w-[80%] mx-auto md:flex md:flex-row'>
            <div className='md:w-[60%] md:border-gray-200 md:border-2 '>
            {dataList.map((data)=>(
               <ItemCard data={data} />
            ))}
            </div>
          
            <div className='hidden md:block md:w-[20%] mx-auto mt-10'>
                <div className='flex justify-between border-b-[1px] border-gray-300 pb-2 items-center'>
                    <div className='flex items-center'>
                    <img src='./mapIcon.png'alt='' className=' w-5 mr-2'></img>
                    Noida,India
                    </div>
                    <div>
                        <img src='./writeIcon.png'alt='' className='h-auto w-5'></img>
                    </div>
                    
                </div>
                <div className='flex mt-8 items-baseline text-gray-600 text-sm'>
                    <img src='./errorIcon.png'alt='' className=' w-5 mr-4'></img>
                    Your Location will helps us serve better and extend a personalised experience .
                </div>
                {logedInUser&& signIn?<div>
                    <div className='flex items-center my-4'>
                        <img src='./handIcon.png'alt='' className='mr-4'></img>
                        Recommended Groups
                    </div>
                    <div className='flex justify-between items-center border-b-[1px] border-gray-400 mb-2 pb-2'>
                        <div className='flex'>
                            <img src='./circle1.png'alt=''></img>
                            Leisure
                        </div>
                       follow
                    </div>
                    <div className='flex justify-between items-center border-b-[1px] border-gray-400 mb-2 pb-2'>
                        <div className='flex'>
                            <img src='./circle2.png'alt=''></img>
                        Activism
                        </div>
                       follow
                    </div>
                    <div className='flex justify-between items-center border-b-[1px] border-gray-400 mb-2 pb-2'>
                        <div className='flex'>
                            <img src='./circle3.png'alt=''></img>
                            MBA
                        </div>
                       follow
                    </div>
                    <div className='flex justify-between items-center border-b-[1px] border-gray-400 mb-2 pb-2'>
                        <div className='flex'>
                            <img src='./circle4.png'alt=''></img>
                            Philosophy
                        </div>
                       follow
                    </div>
                </div>:null}

            </div>
         </div>
       
       
        
    </div>
  )
}

export default Body