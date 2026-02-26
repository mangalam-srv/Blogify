import React, { useEffect, useState } from 'react'
import CommentTableItem from '../../components/Admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {

  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')

  const { axios } = useAppContext()

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/blog/comments')
      if (data.success) {
        setComments(data.comments)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <div className='flex-1 p-6 md:p-10 bg-gradient-to-b from-gray-50 to-white'>

      {/* Header */}
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-xl font-semibold text-gray-800'>Comments</h1>

        <div className='flex gap-3'>
          {["Approved", "Not Approved"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-1.5 text-xs rounded-full border transition
                ${filter === item
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-500 border-gray-300 hover:bg-gray-100"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className='bg-white border border-gray-200 rounded-2xl shadow-sm overflow-x-auto'>

        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-600 text-left uppercase border-b border-gray-200'>
            <tr>
              <th className='px-6 py-4'>Blog Title & Comments</th>
              <th className='px-6 py-4 max-sm:hidden'>Date</th>
              <th className='px-6 py-4'>Action</th>
            </tr>
          </thead>

          <tbody>
            {comments
              .filter((item) => {
                if (filter === "Approved") return item.isApproved === true;
                return item.isApproved === false;
              })
              .map((item, index) => (
                <CommentTableItem
                  key={item._id}
                  comment={item}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Comments