import { NextPage } from 'next'
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'


const Profile: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.replace('/')
        }
    }, [status, router])

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (session) {
        return (
            <div>
                <div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl mx-auto">
                        <div className="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div className="flex items-center justify-center">
                                    <img className="h-24 w-24 rounded-full" src={session.user.image?.toString()} alt="Profile" />
                                    <div className="ml-6">
                                        <h1 className="text-2xl font-bold text-gray-100">{session.user.name}</h1>
                                        <p className="text-gray-400">{session.user.email}</p>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <div className="flex justify-between items-center">
                                        <div className="text-gray-400">Workouts</div>
                                        <div className="text-gray-100 font-bold text-xl">{session.user.workoutId}</div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        // className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                                        className={`${isLoading ? 'rounded-full bg-gray-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                                            } text-white font-bold py-2 px-4 rounded`}
                                        onClick={session ? () => void signOut() : () => void signIn()}
                                    >
                                        {session ? "Sign out" : "Sign in"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return <div>Access Denied</div>
}

export default Profile;