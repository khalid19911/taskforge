import { Link } from "react-router-dom";

import Newsletter from "../components/Newsletter";
import Logo from "../assets/images/pain_kulture_logo.png";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();
  console.log("Here ", session);

  const HandleLogin = async (e) => {
    if (!email || !password) {
      alert("Fill in all the fields!");
      return;
    }
    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const result = await signInUser(email, password);
      if (result.success) {
        navigate("/shop");
      }
    } catch (err) {
      setError("an error has occured");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="w-[90%] max-w-sm  md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-5 rounded-xl
    shadow-slate-500 shadow-lg"
      >
        <img src={Logo} alt="logo" className="w-12 md:w-20" />
        <h1 className="text-lg md:text-xl font-semibold -mt-10">Login</h1>

        <p className="text-xs md:text-sm text-gray-500 text-center ">
          Dont have an account?{" "}
          <Link to="/register" className="text-white hover:underline">
            Sign up
          </Link>
        </p>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <MdAlternateEmail />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email account"
              className="bg-transparent border-0
            w-full outline-none text-sm md:text-base"
            />
          </div>

          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative">
            <FaFingerprint />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              className="bg-transparent border-0
            w-full outline-none text-sm md:text-base"
            />
            {showPassword ? (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 crusor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>

        <button
          className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:to-blue-600
        text-sm md:text-base"
          onClick={HandleLogin}
          disabled={loading}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
