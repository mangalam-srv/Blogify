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
    <tr className='border-y border-gray-300'>
      <td className='px-6 py-4'>
        <b>Blog</b> : {blog?.title}
        <br /><br />
        <b>Name</b> : {name}
        <br />
        <b>Comment</b> : {content}
      </td>

      <td className='px-6 py-4 max-sm:hidden'>
        {blogDate.toLocaleDateString()}
      </td>

      <td className='px-6 py-4'>
        <div className='inline-flex items-center gap-4'>
          {!isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              className='w-5 cursor-pointer'
            />
          ) : (
            <p className='text-xs border border-green-600 text-green-600 rounded-full px-3 py-1'>
              Approved
            </p>
          )}

          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            className='w-5 cursor-pointer'
          />
        </div>
      </td>
    </tr>
  )
}

export default CommentTableItem