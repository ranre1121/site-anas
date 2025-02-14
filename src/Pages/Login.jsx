import logo from '../assets/logo.png'
import apple from './apple.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import showImg from './show.svg';
import hide from './hide.svg';
 
export default function Login(){
    const [show, setShow] = useState(false);

    function handleSetShow(){
        setShow(!show);
    }

    return(
        <div className=' w-full flex flex-col items-center p-10'>
            <Link to='/' className='cursor-pointer flex items-center self-start'>
            <img className = 'w-10 h-10 lg:w-10 lg:h-10 lg:m-2' src={logo}/>    
            <p className = 'font-bold tracking-tighter lg:text-xl'>Abstractly</p>
            </Link>
            <div className='rounded-xl shadow-lg flex flex-col p-10 w-[35%]'>
                <h1 className='font-bold text-3xl mb-1'>Sign in</h1>
                <p className='font-medium'>Stay updated on your professional world</p>
                <input type='text' placeholder='Email or Phone' className='rounded-sm border mt-5 p-2 w-full'/>
                <div className='flex rounded-sm border items-center relative w-full mt-5'>
                <input className='w-full h-full p-2' type={show?'text':'password'} placeholder ='Password'/>
                <img className='ml-auto h-6 w-6 cursor-pointer absolute right-[2%]' onClick={handleSetShow} src={show?hide:showImg}/>
                </div>
                <p className='text-indigo-600 font-semibold cursor-pointer mt-2'>Forgot password?</p>
                <button className='bg-indigo-600 text-white cursor-pointer rounded-full p-3 mt-5'>Sign in</button>
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
                <p>New to Abstractly?</p>
                <Link to='/register' className='text-indigo-600 cursor-pointer'>Join now</Link>
            </span>

        </div>
    )
}