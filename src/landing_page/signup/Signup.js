import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://backend-zerodha-49sv.onrender.com/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login"); // ✅ Navigate to login after success
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong. Please try again.");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="text-center">
          Open a free demat and trading account online
        </h1>
        <p className="text-center">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-evenly">
          {/* Left Side: Image */}
          <div className="col-md-7 text-center p-5">
            <img
              src="media/images/signup.png"
              style={{ width: "100%" }}
              alt="Signup visual"
            />
          </div>

          {/* Right Side: Signup Form */}
          <div className="form_container">
            <h2>Signup Account</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
