import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';



const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const handleDelayedNavigation = (event, page) => {
        event.preventDefault();

        setTimeout(()=>{
            navigate(page)
        }, 1000);

    };

    return(
    <div className = 'px-10 my-4 flex items-center lg:px-22 lg:py-3'>
    <img className = 'w-10 h-10 lg:w-10 lg:h-10 lg:m-2' src={logo}/>    
    <p className = 'cursor-alias font-bold tracking-tighter lg:text-xl'>Abstractly</p>
    <div className={`${menuOpen ? 'block' : 'hidden'}
    flex absolute rounded-sm max-lg:p-4 max-lg:gap-2 max-lg:flex-col 
    max-lg:bg-gray-400 max-lg:text-white lg:flex lg:ml-[8%] lg:static 
    lg:gap-10 right-0 max-lg:mr-[8%] top-[7%]`} id='menuDiv' onClick = {()=>{setMenuOpen(false)}}>

        <p className = 'cursor-pointer'><a href='#pricing'>Pricing</a></p>
        <p className = 'cursor-pointer'><a href='#faq'>FAQ</a></p>
        <p className = 'cursor-pointer'><a href='#features'>Features</a></p>
        <p className = 'cursor-pointer'><a href='#reviews'>Reviews</a></p>
        <p className = 'cursor-pointer'><a href='#contacts'>Contacts</a></p>
        <p className = 'lg:hidden block cursor-pointer'></p>
        <p className = 'lg:hidden block cursor-pointer'>Register</p>

    </div>
    <img className='w-5 h-5 ml-auto lg:hidden cursor-pointer' onClick = {() => setMenuOpen(!menuOpen)} src={ menuOpen ? close : menu }/>
    <div className = 'lg:flex ml-auto gap-5 hidden'>
        <Link onClick = {(event)=>handleDelayedNavigation(event,'/login')} to='/login' className = 'py-2 px-4 bg-white cursor-pointer text-sm rounded-sm shadow-sm'>Log in</Link>
        <Link onClick = {(event)=>handleDelayedNavigation(event,'/register')} to='/register' className = 'py-2 px-4 bg-indigo-600 cursor-pointer text-white text-sm rounded-sm shadow-sm'>Register</Link>
    </div>
    </div>
    )
}

export default Nav