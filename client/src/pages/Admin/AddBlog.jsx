import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddBlog = () => {

  const { axios } = useAppContext()
  const [isAdding, setIsAdding] = useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [category, setCategory] = useState("Startup")
  const [isPublished, setIsPublished] = useState(false)

  const generateContent = async () => {
    try {
      if (!title) return toast.error("Please enter a blog title first")

      const { data } = await axios.post("/api/blog/generate", { prompt: title })

      if (data.success) {
        quillRef.current.root.innerHTML = data.content
        toast.success("AI content generated")
      } else toast.error(data.message)

    } catch (error) {
      toast.error(error.response?.data?.message || error.message)
    }
  }

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      setIsAdding(true)

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished
      }

      const formData = new FormData()
      formData.append('blog', JSON.stringify(blog))
      formData.append('image', image)

      const { data } = await axios.post(`/api/blog/add`, formData)

      if (data.success) {
        toast.success(data.message)
        setImage(false)
        setTitle('')
        setSubTitle('')
        quillRef.current.root.innerHTML = ''
        setCategory('Startup')
      } else toast.error(data.message)

    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsAdding(false)
    }
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-gradient-to-b from-gray-50 to-white p-6 md:p-10 overflow-auto'>

      <div className='max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-sm p-8'>

        <h2 className='text-xl font-semibold text-gray-800 mb-8'>
          Create New Blog
        </h2>

        <div className='mb-6'>
          <p className='text-sm font-medium text-gray-700 mb-2'>Upload Thumbnail</p>
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
              className='h-20 rounded-xl border border-gray-200 cursor-pointer hover:opacity-90 transition'
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id='image'
              hidden
              required
            />
          </label>
        </div>

        <div className='mb-6'>
          <p className='text-sm font-medium text-gray-700 mb-2'>Blog Title</p>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 outline-none transition'
          />
        </div>

        <div className='mb-6'>
          <p className='text-sm font-medium text-gray-700 mb-2'>Sub Title</p>
          <input
            type="text"
            required
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            className='w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-blue-500 outline-none transition'
          />
        </div>

        <div className='mb-6'>
          <p className='text-sm font-medium text-gray-700 mb-2'>Description</p>

          <div className='relative border border-gray-200 rounded-xl overflow-hidden'>
            <div ref={editorRef} className="min-h-[300px] p-4"></div>

            <button
              type='button'
              onClick={generateContent}
              className='absolute bottom-3 right-3 text-xs 
                         bg-gradient-to-r from-blue-600 to-indigo-600 
                         text-white px-4 py-1.5 rounded-full shadow hover:opacity-90 transition'
            >
              Generate With AI
            </button>
          </div>
        </div>

        <div className='mb-6'>
          <p className='text-sm font-medium text-gray-700 mb-2'>Blog Category</p>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className='px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none'
          >
            {blogCategories.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className='flex items-center gap-3 mb-8'>
          <span className='text-sm font-medium text-gray-700'>Publish Now</span>
          <input
            type="checkbox"
            checked={isPublished}
            onChange={e => setIsPublished(e.target.checked)}
            className='scale-125 cursor-pointer'
          />
        </div>

        <button
          disabled={isAdding}
          type='submit'
          className='px-8 py-3 rounded-lg 
                     bg-gradient-to-r from-blue-600 to-indigo-600 
                     text-white font-medium shadow hover:opacity-90 transition'
        >
          {isAdding ? 'Adding...' : 'Add Blog'}
        </button>

      </div>
    </form>
  )
}

export default AddBlog