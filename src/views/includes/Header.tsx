import React from 'react'
import User from '../components/icons/User'

const Header = (): React.ReactElement => {
    return (
        <nav className='bg-gray-900'>
            <div className='mx-4 py-2 flex items-center gap-4'>
                <h2 className='text-white'>Logo</h2>
                <a href="#" className='text-white'>Link</a>
                <a href="#" className='text-white'>Link</a>
                <button className='p-1 hover:bg-gray-700 rounded ml-auto'>
                    <User className='text-white h-5 w-5' />
                </button>
            </div>
        </nav>
    )
}

export default Header
