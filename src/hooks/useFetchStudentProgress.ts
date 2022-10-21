import {  DocumentData } from "firebase/firestore"; 
import  fireStore  from '../pages/api/firestore/api'
import { useState } from 'react'


export const useFetchStudentProgress = () => {
    const [studentProgress, setStudentProgress] = useState<DocumentData>()
    const initFetchStudentProgress = async () => {
        const response = await fireStore.get('Newusers', 'paul.emechebe@gmail.com')
        setStudentProgress(response)
    }

    return {
        studentProgress,
        initFetchStudentProgress,
    }
}