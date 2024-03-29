import React, { useState } from 'react'

const Form = ({signIn,setSignIn,email,setEmail,setLogedInUser,logedInUser}) => {
    const [createAccount ,setCreateAccount] = useState(true)
    const onClose = () =>{
        setSignIn(false)
    }
    const handleSIgnUp = ()=>{
        setCreateAccount(!createAccount)
    }
   
   console.log("lo",logedInUser);
    
   if (logedInUser) {
    return <div>
        <div className='flex justify-end absolute -top-[70px] right-[20px] bg-white z-30 px-10 items-center'>
            <img src='./imageLogo1.png'alt='' className='mr-4'></img>
            Sidharth Goyal
            <img src='./baseline-arrow.png'alt=''className='ml-4'></img>
        </div>
    </div>
   }

  return ( 
    <div className='top-[160px] sm:top-[300px] bottom-0 bg-white absolute px-4 rounded-md w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto  left-0 right-0 h-[500px] md:bottom-[70px]'>
    <div className='hidden md:block text-sm text-green-600 pt-4'>Let's learn & inspire each other with our passion for computer engineering.SIgn up now .

    </div>
    <div className='flex'>
    <div>
    
    <div className='flex justify-between py-6 '>
    <div>
        {createAccount?"Create Account":"Welcome Back !"}
    </div>
    <div onClick={onClose} className='md:absolute md:right-0 md:-top-[25px]'>
        <img src={'./cancelIcon.png'} alt=''className='md:hidden'></img>
        <img src ="./whiteCancelIcon.png" alt=''className='hidden md:inline-block'></img>
    </div>
    </div>
   
    <form className='bg-gray-200 border-gray-400 border-[1px] rounded-md mb-6 '>
        {createAccount?(<div className='flex border-gray-400  border-b-[1px] bg-gray-200  pl-4 py-2 '>
           <input type='text' placeholder='First Name' className='w-[50%] border-r-[1px] border-gray-400 bg-gray-200 outline-none 'autoFocus>

           </input>
            <input type='text'placeholder='Last Name' className='w-[50%] bg-gray-200 outline-none pl-4'>

            </input>
        </div>):null}
        
       
        <input type='Email' placeholder='Email' className='border-gray-400  border-b-[1px] w-[100%] bg-gray-200 outline-none pl-4 py-2'onChange={(e)=>(e.target.value)}></input>
        <div className='border-gray-400  border-b-[1px] flex justify-between w-[100%] bg-gray-200  pl-4 py-2'>
           <input type='password'placeholder='Password'className='bg-gray-200 outline-none ' ></input>
           <img src='./visibility.png'alt=''className='rotate-90 mr-4'></img>
        </div>
       {
        createAccount? <input type='password'placeholder='Confirm Email' className='w-[100%] outline-none bg-gray-200  pl-4 py-2  '></input>:null
       }
       
    </form>
    <div className='flex justify-between mb-6'>
    <div className='bg-blue-600 rounded-xl' onClick={()=>(
        onClose(),
    setEmail(email),
    alert("created a account"),
    setEmail(""),
    setLogedInUser(true)
 )}>
    <button className='px-4 py-1 rounded-xl text-white'>
        {createAccount?"create Account":"Sign In"} 
    </button>
    </div>
    <div className='underline md:hidden'onClick={handleSIgnUp} >
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
  
    </div>
   <div className='hidden md:block text-xs py-6 '>
    {createAccount?"Already have an account?":"Don't have an account yet ?"} <span className='text-blue hover:text-blue-700'
    onClick={handleSIgnUp} >
       or, {createAccount?"Sign In":"Create new for free!"} </span>
    <img src="./medium.png"alt='' className='mt-10 object-contain'></img>
   </div>
   </div>
   <footer className={'text-center mt-8 md: text-xs md:flex  md:mt-0 '+ (createAccount?"md:justify-end":"md:justify-start")}>
    <p className='w-[30%]'> {createAccount?"By signing up ,you agree to our Terms & conditions ,Privacy policy":"Forgot Password ?"}</p>
       
      
    </footer>

</div>
  ) 
}

export default Form ;