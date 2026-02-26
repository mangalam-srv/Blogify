import React, { useEffect, useState } from 'react'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import Moment from 'moment';
import Loader from '../components/Loader';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Blog = () => {

  const { id } = useParams();
  const { axios } = useAppContext()

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const fetchblogdata = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchcomments = async () => {
    try {
      const { data } = await axios.post('/api/blog/comments', { blogId: id })
      if (data.success) {
        setComments(data.comments)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const addComment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/blog/add-comment', { blog: id, name, content });
      if (data.success) {
        toast.success(data.message)
        setName('')
        setContent('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchblogdata()
    fetchcomments()
  }, [])

  return data ? (
    <div className='relative bg-gradient-to-b from-white to-gray-50'>

      <Navbar />

      {/* Hero Section */}
      <div className='max-w-4xl mx-auto px-6 text-center mt-20'>

        <p className='text-sm font-medium text-blue-600 mb-4'>
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>

        <h1 className='text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight'>
          {data.title}
        </h1>

        <h2 className='mt-5 text-gray-500 max-w-2xl mx-auto'>
          {data.subTitle}
        </h2>

        <p className='inline-block mt-6 px-4 py-1.5 rounded-full 
                      bg-blue-50 text-blue-600 text-sm font-medium'>
          Carlo Wing
        </p>
      </div>


      {/* Featured Image + Content */}
      <div className='max-w-5xl mx-auto px-6 mt-16'>

        <img
          src={data.image}
          alt=""
          className='rounded-2xl shadow-lg mb-12 w-full'
        />

        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className='rich-text max-w-3xl mx-auto 
                     text-gray-700 leading-relaxed 
                     text-base sm:text-lg space-y-6'
        ></div>

      </div>


      {/* Comments Section */}
      <div className='max-w-3xl mx-auto px-6 mt-24'>

        <h3 className='text-xl font-semibold mb-10'>
          Comments ({comments.length})
        </h3>

        <div className='space-y-6'>
          {comments.map((item, index) => (
            <div
              key={index}
              className='p-6 rounded-xl 
                         bg-white border border-gray-200 
                         shadow-sm hover:shadow-md transition'
            >
              <div className='flex items-center gap-3 mb-3'>
                <img src={assets.user_icon} alt="" className='w-8' />
                <div>
                  <p className='font-medium text-gray-800'>{item.name}</p>
                  <p className='text-xs text-gray-400'>
                    {Moment(item.createdAt).fromNow()}
                  </p>
                </div>
              </div>

              <p className='text-gray-600 leading-relaxed ml-11'>
                {item.content}
              </p>
            </div>
          ))}
        </div>

      </div>


      {/* Add Comment Form */}
      <div className='max-w-3xl mx-auto px-6 mt-20'>

        <h3 className='text-xl font-semibold mb-6'>
          Add Your Comment
        </h3>

        <form
          onSubmit={addComment}
          className='space-y-5 bg-white border border-gray-200 
                     p-8 rounded-2xl shadow-sm'
        >

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder='Name'
            required
            className='w-full px-4 py-3 rounded-lg 
                       border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 
                       outline-none transition'
          />

          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder='Comment'
            required
            className='w-full px-4 py-3 rounded-lg 
                       border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 
                       outline-none transition h-40'
          ></textarea>

          <button
            type='submit'
            className='px-8 py-3 rounded-lg 
                       bg-gradient-to-r from-blue-600 to-indigo-600 
                       text-white font-medium 
                       hover:opacity-90 transition shadow-md'
          >
            Submit
          </button>

        </form>
      </div>


      {/* Share Section */}
      <div className='max-w-3xl mx-auto px-6 mt-24 mb-28 text-center'>

        <h3 className='text-lg font-semibold mb-6'>
          Share This Article On Social Media
        </h3>

        <div className='flex justify-center gap-6'>
          <img src={assets.facebook_icon} className='w-10 hover:scale-110 transition cursor-pointer' alt="" />
          <img src={assets.twitter_icon} className='w-10 hover:scale-110 transition cursor-pointer' alt="" />
          <img src={assets.googleplus_icon} className='w-10 hover:scale-110 transition cursor-pointer' alt="" />
        </div>

      </div>

      <Footer />
    </div>
  ) : <Loader />
}

export default Blog