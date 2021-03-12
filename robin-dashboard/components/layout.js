import Header from './header'
import {useRouter} from 'next/router'
import Link from './ActiveLink'
import Image from 'next/image'
import SideNav from './sideNav'

const Layout = ({children}) => {
    return (
        <>
            <div className='flex'>
                <SideNav/>
                <main className='bg-gradient-to-br from-green-500 to-blue-400 from h-100 w-full flex flex-row justify-center'>
                    <div className="wrap sm:w-9/10 w-80">
                        <Header/>
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