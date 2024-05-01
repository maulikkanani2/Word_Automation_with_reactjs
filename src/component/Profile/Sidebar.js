import React from 'react'

const menuList = [
    {
        id:1,
        title: 'profile'
    },
    {
        id:2,
        title:'plans'
    },
    {
        id:3,
        title:'Deactive'
    }
]

const Sidebar = ({activeTab,setActiveTab}) => {
  return (
    <div className='flex flex-row xl:flex-col rounded-2xl max-w-[352px] bg-white w-full shadow-card min-w-full xl:min-w-0 xl:min-h-[683px]'>
        <div className='p-4 xl:p-7 font-bold text-[25px] hidden xl:block'>
            Account
            </div>
        <div 
        className='flex-grow flex  xl:flex-col justify-center xl:justify-normal p-3 xl:p-0'>
            {
                menuList.map((item) => {
                    return (
                        <div className='relative cursor-pointer group ml-1 xl:ml-0 w-1/3 xl:w-auto' key={item.id} onClick={() => {setActiveTab(item.id)}}>
                            <div className={`${activeTab === item.id ? 'bg-primary' : 'bg-white'} absolute top-0 bottom-0 left-0 w-2.5 hidden xl:block`}></div>
                            <div className={`xl:pl-6 p-2 ${activeTab === item.id ? 'bg-[#124EE81A] text-primary xl:text-inherit' : 'bg-transparent'} ${activeTab !== item.id ? 'group-hover:text-primary' : ''} h-full flex items-center min-w-0 sm:min-w-[100px] justify-center xl:justify-start text-lg md:text-[22px] rounded-xl xl:rounded-none capitalize`}>{item.title}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sidebar