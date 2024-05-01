import React, {useEffect} from 'react'
import Layout from '../component/Layout/Layout'
import { mdiEye, mdiEyeOff, mdiLogin } from '@mdi/js'
import Icon from '@mdi/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, FacebookAuthProvider ,signInWithEmailAndPassword, GithubAuthProvider } from 'firebase/auth';
import { app } from '../Services/firebase'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Services/HandledSession";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);
  const { currentUser } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  const signInWithGithub = () => {
    signInWithRedirect(auth, githubProvider);
  };
  
  const signInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const signInWithFacebook = () => {
    signInWithRedirect(auth, facebookProvider);
  };

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        const user = result.user;
        console.log('Logged in user:', user);
        toast.success('User Login Successfully.');
        navigate("/");
      } catch (error) {
        console.error('Sign-In Error:', error);
      }
    };

    handleRedirectResult();
  }, [auth]);

    // handel login email and password

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful', userCredential.user);
      toast.success('User Login Successfully.');
    } catch (error) {
      console.error('Login error:', error.message);
      toast.error('Invalid credentials. Please try again.');
    }
  };

  useEffect(() =>{
      if(currentUser){
        navigate("/")
      } 
      else {
        navigate('/login')
      }
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
              Enter your email and password to login.
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
              <div>
                <input
                  type='checkbox'
                  id='remeberme'
                  className='mr-2'
                />
                <label
                  htmlFor="remeberme"
                  className='cursor-pointer select-none'>
                  Remember me
                </label>
              </div>
              <div className='mt-2 sm:mt-0'>
                <Link className='text-[#3E334E] hover:underline'>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className='flex justify-center items-center gap-6'>
              <button className="flex justify-center bg-primary min-w-[100px] max-w-[196px] w-full p-4 font-bold text-white rounded-md px-3 py-2"
              onClick={handleLogin}>
                <Icon
                  path={mdiLogin}
                  size={1} color={"#fff"}
                  className="z-10 relative w-[20px] mr-2"
                />
                Login
              </button>
              <button className="flex justify-center border-[#3E334E] border text-[#3E334E] bg-white min-w-[100px] max-w-[196px] w-full p-4 font-bold rounded-md px-3 py-2"
              onClick={() => {
                navigate("/signup");
              }}>
                Sign Up
                <Icon
                  path={mdiLogin}
                  size={1}
                  color={"#3E334E"}
                  className="z-10 relative w-[20px] ml-1"
                  
                />
              </button>
            </div>
            <div className='text-center text-sm text-[#3E334E] mt-12 mb-4'>Or, login with</div>
            <div className='flex flex-wrap md:flex-nowrap justify-center gap-4'>
              <button className="flex justify-center border-[#3E334E] border text-[#fff] bg-blue-800 min-w-[100px] max-w-[196px] w-full font-bold rounded-md px-4 py-3"
              onClick={signInWithFacebook}
              >
                Facebook
              </button>
              <button className="flex justify-center border-[#3E334E] border text-[#3E334E] bg-whitw min-w-[100px] max-w-[196px] w-full font-bold rounded-md px-4 py-3"
              onClick={signInWithGithub}
              >
                <img
                  src="/assets/images/github (1).png"
                  className="z-10 relative w-[22px] mr-2"
                  alt="preview2"
                />
                GitHub
              </button>
              <button className="flex justify-center border-[#3E334E] border text-[#3E334E] bg-white min-w-[100px] max-w-[196px] w-full font-bold rounded-md px-4 py-3"
                onClick={signInWithGoogle}
              >
                <img
                  src="/assets/images/google_btn.png"
                  className="z-10 relative w-[20px] mr-2"
                  alt="preview2"
                />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login;