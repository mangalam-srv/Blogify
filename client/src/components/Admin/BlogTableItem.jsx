import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({ blog, fetchBlogs, Index }) => {

  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  const { axios } = useAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm('Are you sure?')
    if (!confirm) return;

    try {
      const { data } = await axios.post('/api/blog/delete', { id: blog._id })
      if (data.success) {
        toast.success(data.message)
        await fetchBlogs()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const togglePublish = async () => {
    try {
      const { data } = await axios.post('/api/blog/toggle-publish', { id: blog._id })
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs()
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className='border-b border-gray-200 hover:bg-gray-50 transition'>

      <th className='px-4 py-5 text-sm font-medium text-gray-600'>
        {Index}
      </th>

      <td className='px-4 py-5 text-sm font-medium text-gray-800'>
        {title}
      </td>

      <td className='px-4 py-5 text-sm text-gray-500 max-sm:hidden'>
        {BlogDate.toDateString()}
      </td>

      <td className='px-4 py-5 max-sm:hidden'>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full
            ${blog.isPublished
              ? "bg-green-50 text-green-600"
              : "bg-orange-50 text-orange-600"
            }`}
        >
          {blog.isPublished ? 'Published' : 'UnPublished'}
        </span>
      </td>

      <td className='px-4 py-5'>
        <div className='flex items-center gap-3'>

          <button
            onClick={togglePublish}
            className={`text-xs font-medium px-3 py-1 rounded-full transition
              ${blog.isPublished
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-blue-600 text-white hover:opacity-90"
              }`}
          >
            {blog.isPublished ? 'UnPublish' : 'Publish'}
          </button>

          <button
            onClick={deleteBlog}
            className='p-2 rounded-full bg-red-50 hover:bg-red-100 transition'
          >
            <img
              src={assets.cross_icon}
              className='w-4'
              alt="delete"
            />
          </button>

        </div>
      </td>

    </tr>
  )
}

export default BlogTableItem