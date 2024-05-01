import React, {useEffect} from 'react'
import Layout from '../component/Layout/Layout'
import { mdiEye, mdiEyeOff, mdiLogin } from '@mdi/js'
import Icon from '@mdi/react'
import { useState } from 'react'
import { getAuth ,createUserWithEmailAndPassword} from 'firebase/auth';
import { app } from '../Services/firebase'
import {  useNavigate } from "react-router-dom";
import { useAuth} from "../Services/HandledSession";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success(`${user?.displayName ? user?.displayName : user?.email} User has been Created Successfully.`);
      
    } catch (error) {
      toast.error('User Already Exist');
      console.error('Signup Error:', error.code, error.message);
    }
  };
  useEffect(() =>{
    if(currentUser){
      navigate("/")
    } 
    else {
      navigate('/signup')
    }
    // eslint-disable-next-line
},[currentUser])

  return (
    <Layout>
      <div className='py-[60px]'>
        <div className='max-w-[600px] w-full mx-auto bg-white rounded-[15px] shadow-primary px-8 lg:px-14 py-12'>
          <div>
            <div className='text-3xl font-bold text-[#3E334E]'>
              Hey, Hello👋
            </div>
            <p className='text-lg mt-2'>
              Enter your email and password to SignUp.
            </p>
          </div>
          <div className='mt-10 p-0 lg:p-8'>
            <div className='mb-6'>
              <div className='font-semibold text-[#3E334E] mb-2'>Email</div>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="text"
                className='p-4 border border-[#AFA2C3] w-full rounded-lg outline-none'
              />
            </div>
            <div className='mb-6'>
              <div className='font-semibold text-[#3E334E] mb-2'>
                Password
              </div>
              <div className='relative'>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}

                type={isEyeOpen ? 'text' : 'password'}
                className='p-4 pr-12 border border-[#AFA2C3] w-full rounded-lg outline-none'
                />
                <Icon
                  path={isEyeOpen ? mdiEye : mdiEyeOff}
                  size={1} color={"#B2A6C5"}  
                  onClick={() => { setIsEyeOpen(!isEyeOpen) }}
                  className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer select-none'
                />
              </div>
            </div>
            <div className='flex items-start sm:items-center flex-col sm:flex-row sm:justify-between mb-6'>
            </div>
            <div className='flex justify-center items-center gap-6'>
              <button className="flex justify-center bg-primary min-w-[100px] max-w-[196px] w-full p-4 font-bold text-white rounded-md px-3 py-2"
              onClick={handleSignUp}>
                <Icon
                  path={mdiLogin}
                  size={1} color={"#fff"}
                  className="z-10 relative w-[20px] mr-2"
                />
                Signup
              </button>
              <button className="flex justify-center border-[#3E334E] border text-[#3E334E] bg-white min-w-[100px] max-w-[196px] w-full p-4 font-bold rounded-md px-3 py-2"
              onClick={() => {
                navigate("/login");
              }}>
                Login
                <Icon
                  path={mdiLogin}
                  size={1}
                  color={"#3E334E"}
                  className="z-10 relative w-[20px] ml-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Signup