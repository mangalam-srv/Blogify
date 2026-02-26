import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from './../../components/Admin/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {

  const { axios, setToken, navigate } = useAppContext();

  const logout = () => {
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null);
    navigate('/')
  }

  return (
    <div className='h-screen flex flex-col bg-gray-50'>

      {/* Top Bar */}
      <div className='h-[70px] flex items-center justify-between px-6 sm:px-12 
                      bg-white border-b border-gray-200 shadow-sm'>

        <img
          src={assets.logo}
          alt=""
          className='w-32 sm:w-40 cursor-pointer hover:opacity-80 transition'
          onClick={() => navigate('/')}
        />

        <button
          onClick={logout}
          className='px-6 py-2 text-sm rounded-full 
                     bg-gradient-to-r from-blue-600 to-indigo-600 
                     text-white font-medium shadow hover:opacity-90 transition'
        >
          Logout
        </button>

      </div>

      {/* Body */}
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <div className='flex-1 overflow-auto'>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Layout