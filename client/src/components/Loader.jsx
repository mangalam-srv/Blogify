const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-gray-50">

      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-t-blue-600 border-r-blue-600 animate-spin"></div>
      </div>

    </div>
  )
}

export default Loader