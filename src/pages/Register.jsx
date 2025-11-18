import { Link, useNavigate } from "react-router-dom";

import Newsletter from "../components/Newsletter";
import Logo from "../assets/images/pain_kulture_logo.png";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

import { UserAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();
  console.log("Here ", session);

  const HandleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // VALIDATION
    if (!email || !confirmEmail || !password || !confirmPassword)
      return alert("Please fill in all fields.");

    if (email !== confirmEmail) return alert("Emails do not match.");

    if (password !== confirmPassword) return alert("Passwords do not match.");

    try {
      const { success, error } = await signUpNewUser(email, password);

      if (error) {
        setError(error.message);
        return;
      }

      if (success) {
        alert("Account created. Check your email to verify your account.");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      setError("Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
    console.log("Here ", session);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div
        className="w-[90%] max-w-sm  md:max-w-md lg:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-5 rounded-xl
    shadow-slate-500 shadow-lg"
      >
        <img src={Logo} alt="logo" className="w-12 md:w-20" />
        <h1 className="text-lg md:text-xl font-semibold -mt-10">Register</h1>

        <p className="text-xs md:text-sm text-gray-500 text-center ">
          Already have an account?{" "}
          <Link to="/login" className="text-white hover:underline">
            Sign in
          </Link>
        </p>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <MdAlternateEmail />
            <input
              value={email}
              type="email"
              placeholder="Email"
              className="bg-transparent border-0
            w-full outline-none text-sm md:text-base"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <MdAlternateEmail />
            <input
              value={confirmEmail}
              type="email"
              placeholder="Confirm Email"
              className="bg-transparent border-0
            w-full outline-none text-sm md:text-base"
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative">
            <FaFingerprint />
            <input
              value={password}
              type={"password"}
              placeholder="Password"
              className="bg-transparent border-0
            w-full outline-none text-sm md:text-base"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative">
            <FaFingerprint />
            <input
              value={confirmPassword}
              type={"password"}
              placeholder="Confirm Password"
              className="bg-transparent border-0
            w-full outline-none text-sm md:text-base"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={HandleRegister}
          className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:to-blue-600
        text-sm md:text-base"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
