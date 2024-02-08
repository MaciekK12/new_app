import { signIn } from 'next-auth/react'
import React from 'react'

export const LoginPage = () => {
    const handleGithubLogin = async () => {
        "use server"
        await signIn("github")
    }
    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with GITHUB</button>
            </form>
        </div>
    )
}

export default LoginPage