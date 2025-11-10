import { Link } from "react-router-dom";

import Newsletter from "../components/Newsletter";
import Logo from "../assets/images/pain_kulture_logo.png";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const HandleRegister = () => {
    // Check all fields filled
    if (!email || !confirmEmail || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Email match
    if (email !== confirmEmail) {
      alert("Email and Confirm Email do not match.");
      return;
    }

    // Password match
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password strength (Supabase)
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters, include one uppercase letter, one number, and one special character."
      );
      return;
    }

    alert("Account created successfully!");
    console.log("Email: " + email);
    console.log("Confirmed Email: " + confirmEmail);

    console.log("Password: " + password);
    console.log("Confirmed Password: " + confirmPassword);

    setEmail("");
    setConfirmEmail("");
    setPassword("");
    setConfirmPassword("");
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
