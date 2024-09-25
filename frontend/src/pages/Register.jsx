import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      
      navigate("/login")

    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#b9e7e7]">
      <h1 className="text-[40px] font-semibold text-teal-800 mb-[20px]">
        Register
      </h1>
      <form
        action=""
        className="flex flex-col p-10 bg-white w-1/4 h-2/7 gap-[20px]"
      >
        <input
          required
          className="p-[10px] border-b-gray-900"
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          className="p-[10px] border-b-gray-900"
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          className="p-[10px] border-none border-r"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button
          className="px-10 py-2 bg-teal-700 text-white"
          onClick={handleSubmit}
        >
          Register
        </button>
        <p className="text-center text-red-500 text-1xl font-semibold">
          {err && <p>{err}</p>}
        </p>
        <span className="text-center">
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
