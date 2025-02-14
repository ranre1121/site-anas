import React, {useState} from 'react'
import check from './check.png'
import {AnimatePresence, motion} from 'motion/react'
import {useSpring, animated} from '@react-spring/web';


function Number({initial,final}){
    const {number} = useSpring({
        from: {number:initial},
        number: final,
        delay: 0,
        config: {mass:1, tension:120, fraction:10},
    })
    return <animated.div>{number.to((n)=>n.toFixed(2))}</animated.div>

}

function Pricing(){

    const [monthly, setMonthly] = useState(true);

    

    return(
        <div id='pricing' className = 'w-[85%] lg:mt-[10%] max-lg:mt-[5%] flex items-center flex-col'>
            <p className = 'text-indigo-600 font-medium'>Pricing Tiers</p>
            <h1 className = 'text-4xl my-3 font-semibold'>Fit for all your needs</h1>
            <p className = 'w-[65%] text-center text-xl text-gray-600'>Pick the plan that suits you today and step up as your
                demands grow - our flexible options have your journey mapped out.</p>
            <div className = 'flex mt-10 gap-2'>
            <motion.div
                onClick={() => setMonthly(true)}
                className="py-2 px-7 cursor-pointer rounded-sm"
                animate={{
                    outline: monthly ? '2px solid #dee2e6' : 'none',
                    scale: monthly? 1.05 : 1
                    
                }}
                transition={{ duration: 0.2 }}
            >
                <p className="font-semibold">Monthly</p>
            </motion.div>

            <motion.div
                onClick={() => setMonthly(false)}
                className="py-2 px-7 cursor-pointer rounded-sm"
                animate={{
                    outline: !monthly ? '2px solid #dee2e6' : 'none',
                    scale: !monthly? 1.05 : 1
                }}
                transition={{ duration: 0.2 }}
            >
                <p className="font-semibold">Annually</p>
            </motion.div>

            </div>
            <div className="mt-[5%] flex w-full gap-8 justify-center max-lg:flex-col">
            {/* Basic Plan */}
            <div className="border flex flex-1 flex-col px-6 py-7 rounded-md group border-gray-300 hover:border-indigo-600 hover:scale-102 hover:shadow-2xl transition-all duration-400">
                <h1 className="font-semibold text-2xl group-hover:text-indigo-700 transition-all duration-400">Basic Plan</h1>
                <p className="mt-2 mb-5">Access to a curated selection of abstract images</p>
                <span className="flex mb-1">
                    <p className="font-semibold text-5xl group-hover:text-indigo-800 transition-all duration-400 flex">$
                        
                        {monthly ? <Number initial={4.99} final={9.99}/> : <Number intiial = {9.99} final = {4.99}/>}
                        
                    </p>
                    <p className="self-end">/month</p>
                </span>
                <p>{monthly ? "B" : "$71 b"}illed {monthly ? "monthly" : "annually"}</p>
                <ul className="mt-8 flex flex-col gap-4 mb-10">
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Standard quality images</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Limited to personal use</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Email support</li>
                </ul>
                <button className="border cursor-pointer border-gray-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-0 rounded-sm py-2 shadow-sm mt-auto transition-all duration-400">
                    Buy now
                </button>
            </div>

            {/* Standard Plan */}
            <div className="border flex flex-1 flex-col py-7 px-6 rounded-md border-gray-300 group hover:scale-102 hover:border-indigo-600 hover:shadow-2xl transition-all duration-400">
                <p className="flex h-13 font-bold text-xl text-indigo-600 items-center bg-indigo-600/20 rounded-t-sm justify-center -mt-7 -mr-6 -ml-6">
                    Most Popular
                </p>
                <h1 className="font-semibold text-2xl mt-7 group-hover:text-indigo-700 transition-all duration-400">Standard Plan</h1>
                <p className="mt-2 mb-5">Next-level Integrations, priced economically</p>
                <span className="flex mb-1">
                    <p className="group-hover:text-indigo-800 font-semibold text-5xl transition-all duration-400 flex">$
                        {monthly ? <Number initial={12.99} final={19.99}/> : <Number intiial = {19.99} final = {12.99}/>}
                    </p>
                    <p className="self-end">/month</p>
                </span>
                <p>{monthly ? "B" : "$155 b"}illed {monthly ? "monthly" : "annually"}</p>
                <ul className="mt-8 flex flex-col gap-4 mb-10">
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Expanded library with more diverse abstract images</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> High-resolution images available</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Suitable for commercial use</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Priority email support</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Advanced analytics</li>
                </ul>
                <button className="border cursor-pointer border-gray-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-0 rounded-sm py-2 shadow-sm mt-auto transition-all duration-400">
                    Buy now
                </button>
            </div>

            {/* Premium Plan */}
            <div className="border flex flex-1 flex-col px-6 py-7 rounded-md group border-gray-300 hover:scale-102 hover:border-indigo-600 hover:shadow-2xl transition-all duration-400">
                <h1 className="font-semibold text-2xl group-hover:text-indigo-700 transition-all duration-400">Premium Plan</h1>
                <p className="mt-2 mb-5">Experience limitless living for power users</p>
                <span className="flex mb-1">
                    <p className="font-semibold text-5xl group-hover:text-indigo-800 transition-all duration-400 flex">$
                        {monthly ? <Number initial={20.99} final={29.99}/> : <Number intiial = {29.99} final = {20.99}/>}
                    </p>
                    <p className="self-end">/month</p>
                </span>
                <p>{monthly ? "B" : "$251 b"}illed {monthly ? "monthly" : "annually"}</p>
                <ul className="mt-8 flex flex-col gap-3 mb-10">
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Full access to the entire image library, including exclusive content</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Highest quality images, including premium collections</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Commercial and resale rights</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Dedicated customer support line</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> 24/7 support response time</li>
                    <li className="flex items-center gap-3"><img className="w-6 h-6" src={check}/> Advanced analytics and insights</li>
                </ul>
                <button className="border cursor-pointer border-gray-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-0 rounded-sm py-2 shadow-sm mt-auto transition-all duration-400">
                    Buy now
                </button>
            </div>
            </div>

            </div>
        
    )
}


export default Pricing  