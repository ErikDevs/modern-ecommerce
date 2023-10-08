import React, { useContext } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { CartContext } from '../StateManagement'



const Login = () => {
  const {googleLogin, facebookLogin} = useContext(CartContext);
 
  return (
    <div className='shadow-xl mt-32 p-10 text-gray-700 rounded-lg'>
      <h2 className='text-3xl font-medium'>Join Today</h2>
      <div className='py-4'>
        <h3 className='py-4'>Sign in with one of the providers</h3>
      </div>
      <div className='flex flex-col gap-4'>
        <button onClick={googleLogin} className='text-white bg-gray-700 p-4 font-medium rounded-lg flex align-middle gap-2'>
          <FcGoogle className='text-2xl' />Sign in with google</button>
        <button onClick={facebookLogin} className='text-white bg-gray-700 p-4 font-medium rounded-lg flex align-middle gap-2'>
          <AiFillFacebook className='text-2xl' />Sign in with Facebook</button>
      </div>

    </div>
  )
}

export default Login