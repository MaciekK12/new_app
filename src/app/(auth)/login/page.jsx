import { auth, signIn } from '@/lib/auth'

const LoginPage = async () => {
    const session = await auth()

    const handleGithubLogin = async () => {
        "use server"
        await signIn("github")
    }

    console.log(session)

    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login with GITHUB</button>
            </form>
        </div>
    )
}

export default LoginPage