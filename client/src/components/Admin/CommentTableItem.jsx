import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const CommentTableItem = ({ comment, fetchComments }) => {

  const { _id, blog, createdAt, name, content, isApproved } = comment
  const blogDate = new Date(createdAt)
  const { axios } = useAppContext()

  const approveComment = async () => {
    try {
      const { data } = await axios.post('/api/blog/approve-comment', { id: _id })
      if (data.success) {
        toast.success(data.message)
        fetchComments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteComment = async () => {
    try {
      const confirmDelete = window.confirm('Are you sure?')
      if (!confirmDelete) return

      const { data } = await axios.post('/api/blog/delete-comment', { id: _id })
      if (data.success) {
        toast.success(data.message)
        fetchComments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className='border-b border-gray-200 hover:bg-gray-50 transition'>

      <td className='px-6 py-5'>
        <div className='space-y-2 text-sm'>
          <p>
            <span className='font-semibold text-gray-700'>Blog:</span>{" "}
            <span className='text-gray-600'>{blog?.title}</span>
          </p>

          <p>
            <span className='font-semibold text-gray-700'>Name:</span>{" "}
            <span className='text-gray-600'>{name}</span>
          </p>

          <p className='text-gray-500 leading-relaxed'>
            <span className='font-semibold text-gray-700'>Comment:</span>{" "}
            {content}
          </p>
        </div>
      </td>

      <td className='px-6 py-5 text-sm text-gray-500 max-sm:hidden'>
        {blogDate.toLocaleDateString()}
      </td>

      <td className='px-6 py-5'>
        <div className='flex items-center gap-4'>

          {!isApproved ? (
            <button
              onClick={approveComment}
              className='p-2 rounded-full bg-green-50 hover:bg-green-100 transition'
            >
              <img
                src={assets.tick_icon}
                className='w-5'
                alt="approve"
              />
            </button>
          ) : (
            <span className='text-xs font-medium 
                             bg-green-50 text-green-600 
                             px-3 py-1 rounded-full'>
              Approved
            </span>
          )}

          <button
            onClick={deleteComment}
            className='p-2 rounded-full bg-red-50 hover:bg-red-100 transition'
          >
            <img
              src={assets.bin_icon}
              className='w-5'
              alt="delete"
            />
          </button>

        </div>
      </td>

    </tr>
  )
}

export default CommentTableItem