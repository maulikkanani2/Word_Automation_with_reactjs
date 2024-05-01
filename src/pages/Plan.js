import React from 'react'
import Layout from '../component/Layout/Layout'
import { mdiCheckBold } from '@mdi/js'
import Icon from '@mdi/react'

const Plan = () => {
  return (
    <Layout>
        <div className=''>
            <div className='pt-24 pb-20 max-w-[1560px] mx-auto px-5'>   
                <div className='mb-[70px]'>
                    <h1 className='text-2xl sm:text-3xl md:text-[40px] font-semibold text-center mb-5'>Choose Your Pricing Plan</h1>
                    <div className='text-center text-secondary text-base sm:text-lg md:text-2xl font-medium'>All plans FREE for the first 30 days</div>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
                    <div className='mx-6 mb-10 md:mb-0 lg:mx-10 flex flex-col items-center p-8 max-w-[386px] w-full min-h-[514px] rounded-2xl shadow-[0px_15px_80px_0px_rgba(0,0,0,0.10)]'>
                        <h2 className='font-semibold text-[28px] text-center mb-7'>Monthly</h2>
                        <div className='relative pl-2 mb-10'>
                            <sup className='text-lg font-semibold absolute top-0 left-0'>&#36;</sup>
                            <span className='text-5xl font-semibold'>50</span>
                            <span className='text-[#999] text-lg font-semibold'>/month</span>
                        </div>
                        <div className='flex-grow'>
                            <ul>
                                <li className='flex items-center mb-5 text-[#333] font-medium'>
                                    <Icon path={mdiCheckBold} size={1} color={"#124EE8"} className='inline mr-3.5' />
                                    50GB Disk space
                                </li>
                                <li className='flex items-center mb-5 text-[#333] font-medium'>
                                    <Icon path={mdiCheckBold} size={1} color={"#124EE8"} className='inline mr-3.5' />
                                    50GB Bandwidth
                                </li>
                                <li className='flex items-center mb-5 text-[#333] font-medium'>
                                    <Icon path={mdiCheckBold} size={1} color={"#124EE8"} className='inline mr-3.5' />
                                    20 Email Accounts
                                </li>
                                <li className='flex items-center mb-5 text-[#333] font-medium'>
                                    <Icon path={mdiCheckBold} size={1} color={"#124EE8"} className='inline mr-3.5' />
                                    Maintenance
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className='bg-primary min-w-[100px] max-w-[196px] w-full p-4 font-bold text-white rounded-md px-3 py-2'>Choose Plan</button>
                        </div>
                    </div>
                    <div className='mx-6 mt-10 md:mt-0 flex flex-col items-center p-8 max-w-[386px] w-full min-h-[514px] rounded-2xl shadow-[0px_15px_80px_0px_rgba(0,0,0,0.10)]'>
                        <h2 className='font-semibold text-[28px] text-center mb-7'>Yearly</h2>
                        <div className='relative pl-2 mb-10'>
                            <sup className='text-lg font-semibold absolute top-0 left-0'>&#36;</sup>
                            <span className='text-5xl font-semibold'>499</span>
                            <span className='text-[#999] text-lg font-semibold'>/year</span>
                        </div>
                        <div className='flex-grow'>
                            <ul>
                                <li className='flex items-center mb-5 text-[#333] font-medium'>
                                    <Icon path={mdiCheckBold} size={1} color={"#124EE8"} className='inline mr-3.5' />
                                    50GB Disk space
                                </li>
                                <li className='flex items-center mb-5 text-[#333] font-medium'>
                                    <Icon path={mdiCheckBold} size={1} color={"#124EE8"} className='inline mr-3.5' />
                                    50GB Bandwidth
                                </li>
                                <li className='flex items-center mb-5 text-[#333] font-medium'>
                                    <Icon path={mdiCheckBold} size={1} color={"#124EE8"} className='inline mr-3.5' />
                                    20 Email Accounts
                                </li>
                                <li className='flex items-center mb-5 text-[#333] font-medium'>
                                    <Icon path={mdiCheckBold} size={1} color={"#124EE8"} className='inline mr-3.5' />
                                    Maintenance
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className='bg-primary min-w-[100px] max-w-[196px] w-full p-4 font-bold text-white rounded-md px-3 py-2' 
                              >Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Plan