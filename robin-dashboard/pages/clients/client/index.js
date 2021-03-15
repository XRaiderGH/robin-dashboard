import Image from 'next/image'


export default function index() {
    return (
        <div className='container w-4/6 bg-white rounded-3xl shadow-custom px-12 py-10 bg-opacity-90'>
            <div className="top flex flex-row justify-between pb-10">
                <span className='flex flex-col justify-center'><h1 className='font-medium text-3xl'>Client 22323</h1></span>
                <span className='border-3 px-3 rounded-3xl border-blue-500 py-2 flex flex-row'>
                         <Image src='/assets/search-solid.svg' width='16.5' height='16.5'/>
                         <input type="text" className='ml-2 focus:outline-none placeholder-blue-500 font-bold w-52 bg-transparent text-lg' placeholder='Search'/>
                    </span>
            </div>

            <div className="bottom">

            </div>
        </div>
    )
}
