import { NextPage } from 'next'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const History: NextPage = () => {

    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.replace('/')
        }
    }, [status, router])


    return (
        <div>
            <h1>History stuff</h1>
        </div>
    )
}

export default History;