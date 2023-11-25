import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'> 
      <h1 className='text-3xl font-semibold text-center my-10'>
        Sign Up
      </h1>
      <form className='flex flex-col gap-4'>
        <input type="text" name="Username" id="username" placeholder='Username' className='border rounded-lg p-3' required/>
        <input type="text" name="email" id="emial" placeholder='Email' className='border rounded-lg p-3'required/>
        <input type="text" name="password" id="password" placeholder='Password' className='border rounded-lg p-3' required/>
        <button className='bg-blue-500 text-white font-semibold p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70'>Sign Up</button>
        <button className='bg-red-700 text-white font-semibold p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70'>Continue With Google</button>
      </form>
      <div className='flex gap-2 my-2'>
        <p>Have an account? </p>
        <Link to={'/sign-in'}>
          <span className='text-blue-800'>
            Sign In. 
          </span>
          </Link>
      </div>
    </div>
  )
}
