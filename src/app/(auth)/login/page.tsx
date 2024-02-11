import { handleGithubLogin } from '@/lib/actions'
import { NextPage } from 'next'
import { IoArrowBack } from "react-icons/io5";

const LoginPage: NextPage = async () => {
    return (
        <>
            <IoArrowBack />
            <form action={handleGithubLogin}>
                <button>Login with GITHUB</button>
            </form>
        </>
    )
}

export default LoginPage