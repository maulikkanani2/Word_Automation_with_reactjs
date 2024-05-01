import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#141d20] pt-10 lg:pt-24 pb-8 px-5'>
            <div className='max-w-[1560px] mx-auto '>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10 xl:gap-y-0 text-white border-b border-white pb-5'>
                    <div>
                        <h2 className='text-whjte font-semibold mb-6 text-2xl'>
                            App name
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem laborum harum! Quisquam voluptas excepturi provident dolorem sequi Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div>
                        <ul>
                            <li className='uppercase mb-3.5'>contact us</li>
                            <li className='mb-3.5'>202, Helga Spring Rd, Crawford, TN 38554</li>
                            <li className='mb-3.5'>Call Us: 123456789</li>
                            <li>my@company.com</li>
                        </ul>
                    </div>
                    <div>
                        <p className='uppercase mb-3 text-center sm:text-start'>
                            sign up for email updates
                        </p>
                        <div className='mb-4 flex flex-col md:flex-row'>
                            <input
                                type="text"
                                className='bg-[#1c222b] min-h-[50px] pl-6 pr-6 md:pr-12 outline-none rounded-3xl'
                                placeholder='Youe e-mail address'
                            />
                            <button className='bg-[#0349e5] mt-3 md:mt-0 text-lg max-w-[150px] w-full mx-auto md:max-w-[150px] md:-ml-9 px-3 py-1.5 min-h-[50px] text-white rounded-3xl'>
                                Subscribe
                            </button>
                        </div>
                        <p className='text-sm'>
                            Sign up with your email address to receive news & updates
                        </p>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between text-white pt-8 '>
                    <div className='text-center sm:text-left mt-5 sm:mt-0'>
                        Copyright 2023 abc.All rights reserved.
                    </div>
                    <ul className='flex flex-col sm:flex-row items-center'>
                        <li className='mx-3 cursor-pointer mb-2 sm:mb-0'>Home</li>
                        <li className='mx-3 cursor-pointer mb-2 sm:mb-0'>About Us</li>
                        <li className='mx-3 cursor-pointer mb-2 sm:mb-0'>Our Team</li>
                        <li className='mx-3 cursor-pointer mb-2 sm:mb-0'>Shop</li>
                        <li className='mx-3 cursor-pointer mb-2 sm:mb-0'>Blog</li>
                        <li className='mx-3 cursor-pointer mb-2 sm:mb-0'>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer