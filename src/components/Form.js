import React, { useState } from 'react'

const Form = ({signIn,setSignIn}) => {
    const [createAccount ,setCreateAccount] = useState(true)
    const onClose = () =>{
        setSignIn(false)
    }
    const handleSIgnUp = ()=>{
        setCreateAccount(!createAccount)
    }
  return (
    <div className='top-[170px] sm:top-[300px] bottom-0 bg-white absolute px-4 rounded-md w-[100%] '>
        <div className='flex justify-between py-6 '>
        <div>
            {createAccount?"Create Account":"Welcome Back !"}
        </div>
        <div onClick={onClose}>
            <img src='./cancelIcon.png'alt=''></img>
        </div>
        </div>
       
        <form className='bg-gray-200 border-gray-400 border-[1px] rounded-md mb-6 '>
            {createAccount?(<div className='flex border-gray-400  border-b-[1px] bg-gray-200  pl-4 py-2 '>
               <input type='text' placeholder='First Name' className='w-[50%] border-r-[1px] border-gray-400 bg-gray-200 outline-none 'autoFocus>

               </input>
                <input type='text'placeholder='Last Name' className='w-[50%] bg-gray-200 outline-none pl-4'>

                </input>
            </div>):null}
            
           
            <input type='Email' placeholder='Email' className='border-gray-400  border-b-[1px] w-[100%] bg-gray-200 outline-none pl-4 py-2'></input>
            <div className='border-gray-400  border-b-[1px] flex justify-between w-[100%] bg-gray-200  pl-4 py-2'>
               <input type='password'placeholder='Password'className='bg-gray-200 outline-none ' ></input>
               <img src='./visibility.png'alt=''className='rotate-90 mr-4'></img>
            </div>
           {
            createAccount? <input type='password'placeholder='Confirm Email' className='w-[100%] outline-none bg-gray-200  pl-4 py-2  '></input>:null
           }
           
        </form>
        <div className='flex justify-between mb-6'>
        <div className='bg-blue-600 rounded-xl' onClick={onClose}>
        <button className='px-4 py-1 rounded-xl text-white'>
            {createAccount?"create Account":"Sign In"} 
        </button>
        </div>
        <div className='underline'onClick={handleSIgnUp}>
            or,{createAccount?"Sign In":"Create Account"} 
        </div>
        </div>
        <div className='flex items-center justify-center border-[1px] border-gray-400 py-1 rounded-lg'>
            <img src='./facebook-logo'alt='' className='mr-4'></img>
            Sign {createAccount?"up":"in"}  with Facebook
        </div>
        <div className='flex items-center justify-center border-[1px] border-gray-400 mt-4 py-1 rounded-lg'>
            <img src='./google-logo'alt='' className='mr-4'></img>
            Sign {createAccount?"up":"in"} with Google
        </div>
        <footer className='text-center mt-8'>
            {createAccount?"By signinng up ,you agree to our Terms & conditions ,Privacy policy":"Forgot Password ?"}
          
        </footer>
       

    </div>
  )
}

export default Form