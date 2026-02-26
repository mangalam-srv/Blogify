import React from 'react'
import { useNavigate } from 'react-router-dom';

const Blogcard = ({ blog }) => {

  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className='group bg-white rounded-2xl overflow-hidden 
                 border border-gray-100 
                 shadow-sm hover:shadow-xl 
                 transition-all duration-300 cursor-pointer 
                 hover:-translate-y-1'
    >

      {/* Image */}
      <div className='overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='aspect-video w-full object-cover 
                     transition-transform duration-500 
                     group-hover:scale-110'
        />
      </div>

      {/* Content */}
      <div className='p-6'>

        {/* Category Badge */}
        <span className='inline-block mb-4 px-3 py-1 
                         text-xs font-medium 
                         bg-blue-50 text-blue-600 
                         rounded-full'>
          {category}
        </span>

        {/* Title */}
        <h5 className='mb-3 font-semibold text-gray-900 
                       text-base leading-snug 
                       group-hover:text-blue-600 
                       transition'>
          {title}
        </h5>

        {/* Description */}
        <p
          className='text-sm text-gray-500 leading-relaxed'
          dangerouslySetInnerHTML={{
            "__html": description?.slice(0, 90)
          }}
        >
        </p>

      </div>
    </div>
  )
}

export default Blogcard