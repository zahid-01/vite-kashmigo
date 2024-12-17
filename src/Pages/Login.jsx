/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginActions } from "../store/loginSlice";
import BASE_URI from "../api";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    axios
      .post(`${BASE_URI}/auth/login`, { email, password })
      .then((res) => {
        localStorage.setItem("JWT", res.data.data.user.token);
        dispatch(loginActions.setUser(res.data.data.user));
        navigate("/");
      })
      .catch(() => {
        setError("Invalid credentials or server error.");
        setLoading(false);
      });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://kashmigo-tours.s3.ap-south-1.amazonaws.com/login.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }}
      ></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 md:p-12 w-full max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-[#228B22] text-center mb-6">
          Welcome to Kashmi-Go
        </h1>

        {/* Error Message */}
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form className="w-full" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="mb-4 text-right">
            <a
              href="/forgotPassword"
              className="text-sm text-green-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-lg transition-colors ${
                loading
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-500 font-bold">
              Register Now
            </a>
          </p>
        </div>

        {/* Optional Branding Images */}
        <div className="flex justify-center gap-8 mt-8">
          <img
            src={"https://kashmigo-tours.s3.ap-south-1.amazonaws.com/taj.png"}
            alt="Taj"
            width={120}
            height={100}
          />
          <img
            src={"https://kashmigo-tours.s3.ap-south-1.amazonaws.com/peso.png"}
            alt="Peso"
            width={120}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
