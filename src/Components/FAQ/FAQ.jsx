import plus from './plus.png';
import minus from './minus.png';
import React, { useState } from 'react';
import {motion} from 'motion/react'

function FAQ() {
    const [openQuestions, setOpenQuestions] = useState({});

    const toggleQuestion = (index) => {
        setOpenQuestions((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };



    const faqData = [
        {
            question: 'Are there any discounts available for long-term subscriptions?',
            answer: 'Yes! We offer a discount on annual subscriptions. If you choose an annual payment plan, you will receive a discount compared to monthly payments. This is a great way to enjoy all the features of our platform at a reduced cost.'
        },
        {
            question: 'Can I change my subscription plan at any time?',
            answer: 'Absolutely! You can upgrade or downgrade your subscription at any time. Changes to your plan will take effect at the start of your next billing cycle.'
        },
        {
            question: 'What forms of payment do you accept?',
            answer: 'We accept all major credit cards, including Visa, MasterCard, and American Express. We also accept payment through PayPal for added convenience.'
        },
        {
            question: 'Do you offer any special pricing for educational institutions or non-profits?',
            answer: 'Yes, we support educational institutions and non-profit organizations by offering special discounted pricing. Please contact us for more details and to see if you qualify.'
        },
        {
            question: 'What is your refund policy?',
            answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with our service within the first 30 days of our subscription, you can cancel your plan and receive a full refund.'
        },
        {
            question: 'Are there any additional fees apart from the subscription cost?',
            answer: 'No, there are no hidden fees. The subscription price is all-inclusive, covering full access to our library and all features listed in your chosen plan.'
        }
    ];

    return (
        <div id='faq' className='w-[85%] mt-[10%] flex flex-col items-center'>
            <h1 className='font-semibold text-4xl mb-3'>Frequently asked questions</h1>
            <p className='w-[65%] text-center text-xl text-gray-600'>Choose any question you need</p>
            <div className='flex flex-col w-full'>
                <ul className='mt-[5%] flex flex-col gap-10'>
                    {faqData.map((item, index) => (
                        <motion.li key={index} className={`flex flex-col gap-3 border-b border-gray-300 pb-5`}>
                            <span className='flex'>
                                <p className='font-semibold'>{item.question}</p>
                                <img
                                    src={openQuestions[index] ? minus : plus}
                                    onClick={
                                        () => {
                                            toggleQuestion(index);
                                        }}
                                    className='w-5 h-5 ml-auto cursor-pointer'
                                    alt='toggle'
                                />
                            </span>
                            <motion.div
                                key="faq-answer"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ 
                                    opacity: 1, 
                                    height: openQuestions[index] ? "auto" : 0 
                                }}
                                transition={{ duration: 0.5 }}
                                style={{ overflow: "hidden" }} 
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: openQuestions[index] ? 1 : 0, y: openQuestions[index] ? 0 : -10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {item.answer}
                                </motion.p>
                            </motion.div>

                        </motion.li>
                    ))}
                </ul>
                <div className='flex py-8 px-6 items-center rounded-md shadow-md border mt-7 border-gray-200'>
                    <span className='flex flex-col'>
                        <h1 className='font-semibold text-xl'>Can't find the answer you're looking for?</h1>
                        <p>Reach out to our <span className='cursor-pointer text-indigo-600'>customer support</span> team.</p>
                    </span>
                    <button className='ml-auto bg-indigo-700 text-white h-10 w-30 rounded-sm cursor-pointer'><a href='#contacts'>Get in touch</a></button>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default FAQ;
