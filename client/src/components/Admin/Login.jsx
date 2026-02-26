import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {

  const { axios, setToken } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = data.token;
        toast.success("Login Successful");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-blue-50 to-indigo-100 px-6">

      <div className="w-full max-w-md 
                      bg-white/80 backdrop-blur-lg 
                      border border-gray-200 
                      rounded-2xl shadow-xl p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Admin
            </span>{" "}
            <span className="text-gray-800">Login</span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            Enter your credentials to access the admin panel
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email id"
              className="w-full px-4 py-3 rounded-lg 
                         border border-gray-300 
                         focus:ring-2 focus:ring-indigo-500 
                         focus:border-indigo-500 
                         outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="your password"
              className="w-full px-4 py-3 rounded-lg 
                         border border-gray-300 
                         focus:ring-2 focus:ring-indigo-500 
                         focus:border-indigo-500 
                         outline-none transition-all"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 rounded-lg 
                       bg-gradient-to-r from-indigo-600 to-blue-600
                       text-white font-medium 
                       hover:opacity-90 
                       transition-all duration-200 
                       shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;