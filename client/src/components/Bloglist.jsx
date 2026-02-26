import React, { useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from "framer-motion";
import Blogcard from './Blogcard';
import { useAppContext } from '../context/AppContext';

const Bloglist = () => {
  const [menu, setmenu] = useState("All");
  const { blogs, input } = useAppContext();

  const filteredBlogs = () => {
    if (input === '') return blogs;

    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(input.toLowerCase()) ||
      blog.category.toLowerCase().includes(input.toLowerCase())
    )
  }

  return (
    <div className='relative max-w-7xl mx-auto px-6 sm:px-12 xl:px-20'>

      {/* CATEGORY MENU */}
      <div className='flex flex-wrap justify-center gap-3 sm:gap-5 my-14'>

        {blogCategories.map((item) => (
          <div key={item} className='relative'>

            {menu === item && (
              <motion.div
                layoutId='underline'
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md'
              />
            )}

            <button
              onClick={() => setmenu(item)}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${menu === item
                  ? "text-white"
                  : "text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {item}
            </button>

          </div>
        ))}

      </div>

      {/* BLOG GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-28'>
        {filteredBlogs()
          .filter((blog) => menu === "All" ? true : blog.category === menu)
          .map((blog) => (
            <Blogcard key={blog._id} blog={blog} />
          ))}
      </div>

    </div>
  )
}

export default Bloglist