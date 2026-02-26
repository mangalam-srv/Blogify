import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const { setInput, input } = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='relative overflow-hidden px-6 sm:px-12 xl:px-24 py-20 bg-gradient-to-b from-white to-blue-50'>

      {/* Background Glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200 opacity-20 blur-3xl rounded-full -z-10'></div>

      <div className='text-center max-w-4xl mx-auto'>

        {/* Badge */}
        <div className='inline-flex items-center gap-3 px-5 py-1.5 mb-6 rounded-full 
                        bg-blue-50 border border-blue-200 text-blue-700 
                        text-sm font-medium shadow-sm backdrop-blur-md'>
          <p>New: AI feature Integrated</p>
          <img src={assets.star_icon} alt="" className='w-3' />
        </div>

        {/* Heading */}
        <h1 className='text-4xl sm:text-6xl font-bold leading-tight text-gray-800 tracking-tight'>
          Your Own{' '}
          <span className='bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent'>
            Blogging
          </span>
          <br />
          Platform.
        </h1>

        {/* Subtext */}
        <p className='mt-6 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed'>
          This is your space to think out loud, to share what matters, and to write without filters.
          Whether it's one word or a thousand, your story starts right here.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={onSubmitHandler}
          className='mt-10 flex items-center max-w-xl mx-auto bg-white/70 
                     backdrop-blur-lg border border-gray-200 
                     rounded-xl shadow-md hover:shadow-lg 
                     transition-all duration-300 overflow-hidden'
        >
          <input
            ref={inputRef}
            type="text"
            placeholder='Search For Blogs'
            required
            className='flex-1 px-5 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400'
          />
          <button
            type='submit'
            className='bg-gradient-to-r from-blue-600 to-indigo-600 
                       text-white px-6 py-3 font-medium 
                       hover:opacity-90 transition-all duration-200'
          >
            Search
          </button>
        </form>

        {/* Clear Button */}
        {input && (
          <div className='mt-5'>
            <button
              onClick={onClear}
              className='text-xs text-gray-500 border border-gray-200 
                         px-4 py-1.5 rounded-md 
                         hover:bg-gray-100 transition'
            >
              Clear Search
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Header