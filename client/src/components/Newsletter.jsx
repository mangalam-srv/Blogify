const Newsletter = () => {
  return (
    <div className="relative mt-32 mb-40 px-6">

      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[400px] bg-blue-200 opacity-20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight seeading-tight">
          Never Miss A Blog
        </h1>

        <p className="mt-4 text-gray-500 text-sm md:text-base">
          Subscribe To Get The Latest Blog.
        </p>

        <form className="mt-10 flex items-center bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">

          <input
            className="flex-1 px-5 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
            type="text"
            placeholder="Enter Your Email Id"
            required
          />

          <button
            type="submit"
            className="px-8 md:px-12 py-3 text-white font-medium 
                       bg-gradient-to-r from-blue-600 to-indigo-600 
                       hover:opacity-90 transition-all duration-200"
          >
            Subscribe
          </button>

        </form>

      </div>
    </div>
  )
}

export default Newsletter