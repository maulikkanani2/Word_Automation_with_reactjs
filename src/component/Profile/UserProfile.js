import React from 'react'

const UserProfile = () => {
  return (
    <div>
      <div className='shadow-card rounded-[15px] bg-white p-7 flex flex-col md:flex-row justify-center items-center'>
        <div className='md:mr-12 mb-5'>
          <img src="/assets/images/user.png" className='w-[100px] h-[100px]' alt="user" />
        </div>
        <div className='mb-5 flex-grow text-[#333] font-bold text-3xl'>John Doe</div>
        <div>
          <button className='bg-primary text-white text-base sm:text-lg md:text-xl p-2.5 md:p-3.5 rounded-[15px]'>Edit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile