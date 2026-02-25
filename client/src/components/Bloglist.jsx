import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "framer-motion";
import Blogcard from './Blogcard';
import { useAppContext } from '../context/AppContext';

const Bloglist = () => {
  const [menu, setmenu] = useState("All");
  const {blogs,input} = useAppContext();

  const filteredBlogs = ()=>{
    if(input===''){
      return blogs;
    } 
    return blogs.filter((blog)=>blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
  }

  return (
    <div>

      {/* CATEGORY MENU */}
      <div className='flex justify-center gap-4 sm:gap-8 my-10'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            
            {menu === item && (
              <motion.div
                layoutId='underline'
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className='absolute inset-0 bg-blue-400 rounded-full'
              />
            )}

            <button
              onClick={() => setmenu(item)}
              className={`relative z-10 px-4 py-1 cursor-pointer ${
                menu === item ? "text-white" : "text-gray-500"
              }`}
            >
              {item}
            </button>

          </div>
        ))}
      </div>

      {/* BLOG GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
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
