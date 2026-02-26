import React, { useState, useEffect } from 'react'
import BlogTableItem from '../../components/Admin/BlogTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast'

const ListBlog = () => {

  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('/api/admin/blogs')
      if (data.success) {
        setBlogs(data.blogs)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className='flex-1 p-6 md:p-10 bg-gradient-to-b from-gray-50 to-white'>

      <h1 className='text-xl font-semibold text-gray-800 mb-8'>
        All Blogs
      </h1>

      <div className='bg-white border border-gray-200 rounded-2xl shadow-sm overflow-x-auto'>

        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-600 text-left uppercase border-b border-gray-200'>
            <tr>
              <th className='px-6 py-4'>#</th>
              <th className='px-6 py-4'>Blog Title</th>
              <th className='px-6 py-4 max-sm:hidden'>Date</th>
              <th className='px-6 py-4 max-sm:hidden'>Status</th>
              <th className='px-6 py-4'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog, Index) => (
              <BlogTableItem
                key={blog._id}
                blog={blog}
                fetchBlogs={fetchBlogs}
                Index={Index + 1}
              />
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ListBlog