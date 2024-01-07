import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div className = "p-3 max-w-lg mx-auto">
      <h1 className='text-3xl my-10 font-semibold text-center'>Sign In</h1>
      <form action="#" className='flex flex-col gap-4'>
          <input type="email" name="email" id="email" placeholder='Email' className='p-3 border rounded-lg'/>
          <input type="password" name="password" id="password" placeholder='Password' className='p-3 border rounded-lg'/>
          <button className='bg-blue-500 text-white rounded-lg p-3 hover:opacity-90 disabled:opacity-70 uppercase font-semibold'>Sign In</button>
          <button className='bg-red-700 text-white rounded-lg p-3 hover:opacity-90 disabled:opacity-70 uppercase font-semibold'>Continue With Google</button>
      </form>
      <div className='flex my-2 gap-2'>
          <p>Don't Have an Account?</p>
          <Link to={'/sign-up'}>
          <span className='text-blue-800' >
            Create an Account. 
          </span>
              </Link>
      </div>
    </div>
  )
}
