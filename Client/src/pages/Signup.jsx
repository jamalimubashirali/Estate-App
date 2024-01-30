import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../config';

export default function Signup() {
  const [formData , setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id] : e.target.value,
    });
  };
  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${BASE_URL}/auth/signup`, 
    {
      method : 'POST',
      mode: 'no-cors',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(formData),
    }
    );
    const data = await res.json();
    console.log(data)
  }
  return (
    <div className='p-3 max-w-lg mx-auto'> 
      <h1 className='text-3xl font-semibold text-center my-10'>
        Sign Up
      </h1>
      <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
        <input type="text" name="Username" id="username" placeholder='Username' className='border rounded-lg p-3'  onChange={handleChange}/>
        <input type="email" name="email" id="emial" placeholder='Email' className='border rounded-lg p-3' onChange={handleChange}/>
        <input type="password" name="password" id="password" placeholder='Password' className='border rounded-lg p-3'  onChange={handleChange}/>
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
