import React, {useEffect, useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setpassword] = useState('')

  // const handleSubmit = (e:any) => {
  //   e.preventDefault()
  // }

  // return (
  //   <div className='w-screen flex '>
  //     <div className='flex bg-slate-500 text-white border-2 border-black w-1/2 h-full p-5'>
  //       <form className='flex flex-col' onSubmit={handleSubmit}>
  //         <label>Email</label>
  //         <input type="email" placeholder='Email'/>
  //         <label>Password</label>
  //         <input type="password" placeholder='Password'/>
  //         <button type="submit" className='h-11 bg-slate-900 mt-3'>log in</button>
  //       </form>
  //     </div>
  //     <div className='border-2 border-black w-1/2 h-full'></div>
  //   </div>
  // )
  const { data: session, status } = useSession()
  console.log("session: ",session)
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} className='startedBtn'>Sign in now</button>
    </>
  )
}

export default Login