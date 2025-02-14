import logo from '../assets/logo.png'
import apple from './apple.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import showImg from './show.svg';
import hide from './hide.svg';
 


export default function Login(){
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    function handleSetShow1(){
        setShow1(!show1);
    }
    function handleSetShow2(){
        setShow2(!show2);
    }

    return(
        <div className=' w-full flex flex-col items-center p-10'>
            <Link to='/' className='flex items-center self-start'>
            <img className = 'w-10 h-10 lg:w-10 lg:h-10 lg:m-2' src={logo}/>    
            <p className = 'font-bold tracking-tighter lg:text-xl'>Abstractly</p>
            </Link>
            <div className='rounded-xl shadow-lg flex flex-col p-10 w-[35%]'>
                <h1 className='font-bold text-3xl mb-1'>Register</h1>
                <p className='font-medium'>Stay updated on your professional world</p>
                <input type='text' placeholder='Enter your email' className='rounded-sm border mt-5 p-2 w-full'/>
                <input type='text' placeholder='Enter your phone number' className='rounded-sm border mt-5 p-2 w-full'/>
                <div className='flex rounded-sm items-center border w-full mt-5 relative'>
                <input className='w-full h-full p-2' type={show1?'text':'password'} placeholder ='Password'/>
                <img className='ml-auto h-6 w-6 absolute cursor-pointer right-[2%]' onClick={handleSetShow1} src={show1?hide:showImg}/>
                </div>
                <div className='flex rounded-sm border w-full relative items-center mt-5'>
                <input className='w-full h-full p-2' type={show2?'text':'password'} placeholder ='Repeat your password'/>
                <img className='ml-auto h-6 w-6 cursor-pointer absolute right-[2%]' onClick={handleSetShow2} src={show2?hide:showImg}/>
                </div>
                <button className='bg-indigo-600 cursor-pointer text-white rounded-full p-3 mt-5'>Register</button>
                <span className='flex items-center gap-3 mt-3'>
                    <div className='w-full border-b h-0 border-b-gray-300'></div>
                    <p>or</p>
                    <div className='w-full border-b h-0 border-b-gray-300'></div>
                </span>
                <button className='border cursor-pointer justify-center items-center flex gap-2 rounded-full p-3 mt-5'>
                    <img className='h-6 w-6' src={apple}/> 
                    <p className='font-medium'>Sign in with Apple</p>
                </button>
            </div>
            <span className='flex gap-2 font-medium mt-10'>
                <p>Already have an account?</p>
                <Link to='/login' className='text-indigo-600 cursor-pointer'>Log in</Link>
            </span>

        </div>
    )
}