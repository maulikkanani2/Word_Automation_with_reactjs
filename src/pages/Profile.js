import React, { useState } from 'react'
import Layout from '../component/Layout/Layout'
import Sidebar from '../component/Profile/Sidebar'
import UserProfile from '../component/Profile/UserProfile'
import Plans from '../component/Profile/Plans'
import Deactive from '../component/Profile/Deactive'

const Profile = () => {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <Layout>
            <div className='max-w-[1560px] mx-auto px-5'>
                <div className='flex flex-col xl:flex-row py-20 gap-14'>
                    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <div className='flex-grow'>
                      {
                        activeTab === 1 && <UserProfile />
                      }
                      {
                        activeTab === 2 && <Plans />
                      }
                      {
                        activeTab === 3 && <Deactive />
                      }
                        
                    </div>
                </div>
            </div>
    </Layout>
  )
}

export default Profile