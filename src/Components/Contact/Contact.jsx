import building from './building.svg'
import mail from './mail.svg'
import telephone from './telephone.svg'
import facebook from './facebook.svg'
import github from './github.svg'
import instagram from './instagram.svg'
import youtube from './youtube.svg'
import telegram from './telegram.svg'
import { useState } from 'react';


function Contact(){
    const [messageLength, setMessageLength] = useState(0);

    function handleMessage(event){
        const input = event.target.value
        setMessageLength(input.length)
    }

    return(
        <div id ='contacts' className='flex w-[85%] mt-[15%] mb-20 items-center gap-50 flex-col '>
            <div className='flex justify-between max-lg:flex-col max-lg:gap-10'>
                <div className='w-[40%] max-lg:w-full'>
                    <h1 className='font-semibold text-5xl mb-5'>Talk to our team</h1>
                    <p className='text-lg text-gray-600'>We're commited to delivering the support you require to make your experience as smooth as possible.</p>
                    <div className='flex flex-col gap-5 mt-10'>
                        <span className='flex items-center gap-3'><div className='flex justify-center items-center shadow-md rounded-full p-3'><img className='h-6 w-6' src={building}/></div><p>123 Maple Street, Springfield, IL, USA</p></span>
                        <span className='flex items-center gap-3'><div className='flex justify-center items-center shadow-md rounded-full p-3'><img className='h-6 w-6' src={telephone}/></div><p>+1 (650) 555-0198</p></span>
                        <span className='flex items-center gap-3'><div className='flex justify-center items-center shadow-md rounded-full p-3'><img className='h-6 w-6' src={mail}/></div><p>hello@abstractly.com</p></span>
                    </div>
                </div>
                <div className='max-lg:w-full flex flex-col border border-gray-300 rounded-md shadow-lg w-[50%] p-5 gap-5'>
                    <div className='flex gap-7'>
                        <span className='gap-2 flex flex-col w-[50%]'>
                        <label for = 'name' className='font-medium' >Name</label>
                        <input className='rounded-sm px-3 w-[100%] border border-gray-300 py-1 bg-gray-50' type='text' placeholder='Your name' name='name'/>
                        </span>
                        <span className='gap-2 flex flex-col w-[50%]'>
                        <label for='email' name='name' className='font-medium'>Email</label>
                        <input type='text' placeholder='example@example.com' className='rounded-sm px-3 w-[100%] border border-gray-300 py-1 bg-gray-50' />
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 h-[50%]'>
                        <label for='message' className='font-medium'>Message</label>
                        <textarea onChange={()=>{handleMessage(event)}} className='border py-1 h-full border-gray-300 rounded-sm px-3 bg-gray-50' name='message' placeholder='Write your message...'/>
                        <label for='message' className={`self-end ${messageLength > 500 ? 'text-red-600' : ''}`}>{messageLength}/500</label>
                    </div>
                    <button className="border cursor-pointer border-gray-200 text-white bg-indigo-600 rounded-sm py-2 shadow-sm mt-auto transition-all duration-400">Submit</button>
                </div>
            </div>
            <div>
                <div className='flex gap-7'>
                    <p><a href='#features'>Features</a></p>
                    <p><a href='#pricing'>Pricing</a></p>
                    <p><a href='#faq'>FAQ</a></p>
                    <p><a href='#reviews'>Reviews</a></p>
                </div>
                <div className='flex gap-7 justify-center mt-8 mb-3'>
                    <a href='youtube.com'><img className='h-6 w-6' src={youtube}/></a>
                    <a href='https://www.instagram.com/yernar1121/'><img className='h-6 w-6 cursor-pointer' src={instagram}/></a>
                    <a href='https://www.facebook.com/ernar.izbatyrov.9/'><img className='h-6 w-6 cursor-pointer' src={facebook}/></a>
                    <a href='https://github.com/ranre1121'><img className='h-6 w-6 cursor-pointer' src={github}/></a>
                    <a href ='https://t.me/yernar1121'><img className='h-6 w-6 cursor-pointer' src={telegram}/></a>
                </div>
                <p>© 2025 Abstractly, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Contact