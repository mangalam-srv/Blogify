import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

  const { navigate, token } = useAppContext()

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">

      <div className='max-w-7xl mx-auto flex justify-between items-center py-5 px-6 sm:px-12 xl:px-20'>

        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt="logo"
          className='w-32 sm:w-40 cursor-pointer transition hover:opacity-80'
        />

        <button
          onClick={() => navigate('/admin')}
          className='flex items-center gap-2 rounded-full text-sm font-medium
                     bg-gradient-to-r from-blue-600 to-indigo-600
                     text-white px-8 py-2.5
                     hover:opacity-90 transition-all duration-200 shadow-md'
        >
          {token ? 'Dashboard' : 'Login'}
          <img src={assets.arrow} className='w-3 opacity-80' alt="arrow" />
        </button>

      </div>
    </div>
  )
}

export default Navbar