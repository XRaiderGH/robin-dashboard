import Image from 'next/image'
const Layout = ({children}) => {
    return (
        <>
            <div className='flex'>
                <nav className='w-328'>
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </nav>
                <main className='bg-gradient-to-br from-green-500 to-blue-400 from h-100 w-full flex flex-row justify-center'>
                    <div className="wrap w-80">
                        <div className="header mt-7 mb-7">
                            <div className="flex flex-row justify-between">
                                <div className="logo"><Image src="/assets/logo.svg" width='130' height='66' alt="Logo"/></div>
                                <div className="flex flex-col justify-center">
                                    <button className="sign-out text-xl text-white border-2 border-white rounded-3xl w-186 h-50 py-1 transition duration-200 ease-in-out hover:bg-blue-500">
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className='opacity-20'/>
                        <div className="body mt-7">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Layout