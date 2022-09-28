import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import Layout from '../../layout/Layout'
import type { NextPageWithLayout } from '../_app'
import { useSession } from 'next-auth/react'
import Register from '../register'
import { doc, getDocFromCache, getDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { useRouter } from 'next/router'

const Dashboard: NextPageWithLayout = () => {
  const {data: session} = useSession()
  const [validateUser, setValidateUser] = useState()
  const router = useRouter()

  // console.log("session", session.user.email)
  useEffect(() => {
    const getData = async () => {
      // const docRef = doc(db, "users", session.user?.email || '')
      
      try {
            const doc = await getDoc(docRef)
            console.log(doc.exists())
            
            if(doc.exists()) {

            } else{
              router.push('/register')
            }
            console.log("document data: ", doc.data())
          } catch (e) {
            console.log("error getting document: ", e)
          }
        }
        
        getData()


  },[])
  return (
      <>
        DASH
        HEllo {session ? 
        // <p>{session.user.email}</p> 
        <p>dummy</p>
        : 
        <p>loading</p>
        }
      </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}

export default Dashboard