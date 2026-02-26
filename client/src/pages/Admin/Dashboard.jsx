import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import BlogTableItem from '../../components/Admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const { axios } = useAppContext();

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('api/admin/dashboard')
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  return (
    <div className='flex-1 p-6 md:p-10 bg-gradient-to-b from-gray-50 to-white'>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>

        <StatCard icon={assets.dashboard_icon_1} value={dashboardData.blogs} label="Blogs" />
        <StatCard icon={assets.dashboard_icon_2} value={dashboardData.comments} label="Comments" />
        <StatCard icon={assets.dashboard_icon_3} value={dashboardData.drafts} label="Drafts" />

      </div>

      <div className='bg-white border border-gray-200 rounded-2xl shadow-sm'>

        <div className='px-6 py-4 border-b border-gray-200 flex items-center gap-3'>
          <img src={assets.dashboard_icon_4} alt="" />
          <p className='font-semibold text-gray-700'>Latest Blogs</p>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th className='px-6 py-4'>#</th>
                <th className='px-6 py-4'>Blog Title</th>
                <th className='px-6 py-4 max-sm:hidden'>Date</th>
                <th className='px-6 py-4 max-sm:hidden'>Status</th>
                <th className='px-6 py-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, Index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  Index={Index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

const StatCard = ({ icon, value, label }) => (
  <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition'>
    <div className='flex items-center gap-4'>
      <img src={icon} alt="" />
      <div>
        <p className='text-2xl font-semibold text-gray-800'>{value}</p>
        <p className='text-sm text-gray-500'>{label}</p>
      </div>
    </div>
  </div>
)

export default Dashboard