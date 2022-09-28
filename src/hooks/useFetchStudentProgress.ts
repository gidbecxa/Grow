import { useState } from 'react'
import { fetchStudentProgress } from '../pages/api/firestore/userApi'


export const useFetchStudentProgress = () => {
    const [studentProgress, setStudentProgress] = useState()
    const initFetchStudentProgress = async () => {
        const response = await fetchStudentProgress()
        setStudentProgress(response)
    }

    return {
        studentProgress,
        initFetchStudentProgress,
    }
}