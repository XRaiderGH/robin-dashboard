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
                <main className='bg-gradient-to-br from-green-500 to-blue-400 from h-100 w-full'>
                    {children}
                </main>
            </div>
        </>
    )
};

export default Layout