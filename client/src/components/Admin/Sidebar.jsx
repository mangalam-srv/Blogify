import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 
                    border-r border-gray-200 pt-8'>

      <div className='flex flex-col gap-2 px-3'>

        <NavItem 
          to="/admin"
          end={true}
          icon={assets.home_icon}
          label="Dashboard"
        />

        <NavItem 
          to="/admin/addBlog"
          icon={assets.add_icon}
          label="Add Blogs"
        />

        <NavItem 
          to="/admin/listBlog"
          icon={assets.add_icon}
          label="Blog List"
        />

        <NavItem 
          to="/admin/comments"
          icon={assets.comment_icon}
          label="Comments"
        />

      </div>
    </div>
  )
}

const NavItem = ({ to, icon, label, end }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `group relative flex items-center gap-3 py-3 px-5 md:px-8 md:min-w-64 
       rounded-xl transition-all duration-200 cursor-pointer

       ${isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`
    }
  >
    <img
      src={icon}
      alt={label}
      className="w-5 transition-all duration-200 group-hover:scale-110"
    />

    <p className="hidden md:inline-block font-medium text-sm tracking-wide">
      {label}
    </p>
  </NavLink>
)

export default Sidebar