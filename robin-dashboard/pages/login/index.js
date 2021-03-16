import Image from 'next/image'
import LoginRegisterButton from "../../components/LoginRegisterButton";



export default function Register() {
    return (
        <div className="flex flex-row" style={{height: 'calc(100vh - 325px'}}>
            <div className="left w-4/6 flex flex-col justify-center">
                <h1 className='flex flex-col font-bold text-white'>
                    <span className='text-8xl mb-5'>Login</span>
                    <span className='text-7xl mb-5'>Start helping others</span>
                    <span className='font-normal text-lg mb-5'>Do you want to create an account?</span>
                    <LoginRegisterButton text='Sign up'/>
                </h1>
            </div>
            <div className="right flex flex-col justify-center w-3/6" style={{transform: 'translateY(-60px)'}}>
                <div className="flex flex-row justify-center" style={{transform: 'translateY(60px)'}}>
                    <Image src='/assets/MenIconLogin.svg' width='135px' height='135px'/>
                </div>
                <div className="container bg-white rounded-3xl px-10 pt-16 pb-10 shadow-lg">

                    <form action="">
                        <label htmlFor="name" className='flex flex-col pb-10'>
                            <span className='font-bold text-xl'>Username or E-mail</span>
                            <input id='name' className='border-b-2 border-black py-2 focus:outline-none' type="email" placeholder='Enter your username or email adress'/>
                        </label>

                        <label htmlFor="name" className='flex flex-col pb-10'>
                            <span className='font-bold text-xl'>Password</span>
                            <input id='name' className='border-b-2 border-black py-2 focus:outline-none' type="password" placeholder='Enter your password'/>
                        </label>

                        <span className="flex flex-row justify-center">
                                <input value='Sign in' className='hover-blue font-bold text-xl text-blue-500 border-2 border-blue-500 rounded-3xl w-186 h-50 py-1 transition duration-200 ease-in-out hover:text-white' type="submit"/>
                            </span>
                    </form>
                </div>
            </div>
        </div>
    )
}
