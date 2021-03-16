import React from 'react'
import {useRouter} from 'next/router'

const LoginRegisterButton = ({text}) => {

    const router = useRouter();


    const redirect = () => {
        if (router.pathname === '/register') {
            router.replace('/login');
        } else if (router.pathname === '/login') {
            router.replace('/register');
        }
    };


    return (
        <button
            onClick={() => {
                redirect()
            }}
            className="hover-blue font-bold text-xl text-white border-2 border-white rounded-3xl w-186 h-50 py-1 transition duration-200 ease-in-out">
            {text}
        </button>
    )
}

export default LoginRegisterButton