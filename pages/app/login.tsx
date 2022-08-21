import React, {useEffect, useState} from 'react'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log("button works")
  }

  return (
    <div className='w-screen flex '>
      <div className='flex bg-slate-500 text-white border-2 border-black w-1/2 h-full p-5'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" placeholder='Email'/>
          <label>Password</label>
          <input type="password" placeholder='Password'/>
          <button type="submit" className='h-11 bg-slate-900 mt-3'>log in</button>
        </form>
      </div>
      <div className='border-2 border-black w-1/2 h-full'></div>
    </div>
  )
}

export default Login