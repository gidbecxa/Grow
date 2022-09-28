import React, { useState, useEffect } from 'react'

function Signup() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setpassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <div className='w-screen flex '>
      <div className='flex bg-slate-500 text-white border-2 border-black w-1/2 h-full p-5'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label>First Name</label>
          <input type="text" placeholder='First Name' />
          <label>Email</label>
          <input type="email" placeholder='Email' />
          <label>Password</label>
          <input type="password" placeholder='Password' />
          <label>Confirm Password</label>
          <input type="password" placeholder='Password' />
          <button type="submit" className='h-11 bg-slate-900 mt-3'>Sign up</button>
        </form>
      </div>
      <div className='border-2 border-black w-1/2 h-full'></div>
    </div>
  )
}

export default Signup