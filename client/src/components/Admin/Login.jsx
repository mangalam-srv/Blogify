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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-indigo-600">Admin</span>{" "}
            <span className="text-gray-800">Login</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Enter your credentials to access the admin panel
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-gray-600">
          
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
              className="w-full border-b border-gray-300 focus:border-indigo-600 outline-none py-2 transition-all"
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
              className="w-full border-b border-gray-300 focus:border-indigo-600 outline-none py-2 transition-all"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 rounded-md 
             bg-gradient-to-r from-indigo-500 to-indigo-600
             text-white font-medium
             hover:from-indigo-600 hover:to-indigo-700
             transition-all duration-300 
             shadow-md hover:shadow-lg cursor-pointer"
              >
                         Login
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;