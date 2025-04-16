import React, { use, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";

const Login = () => {
  const { loginUser,loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email,password).then((userCredential) => {
      const user = userCredential.user;
      handleSuccess("Login Successful");
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      handleError(errorMessage);
      setError(errorMessage);
    });
  
   


  };
    // sigin using google
    const handleRegister=() => {  
      loginWithGoogle()
        .then((result) => {
          const user = result.user;
          alert('User Created Successfully');
          navigate('/', { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  return (
    <section className="flex flex-col lg:flex-row h-auto lg:h-screen items-center">
      {/* Image Section */}
      <div className="bg-indigo-600 w-full lg:w-2/3 h-64 lg:h-screen">
        <img
          src="https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Signup Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form */}
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-full lg:h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-full">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Login Form
          </h1>

          <form className="mt-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                minLength="6"
                // onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            {/* {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-600 mt-2">{success}</p>} */}

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Login
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
                      type="button"
                      onClick={handleRegister}
                      className="w-full hover:cursor-pointer bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                    >
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 48 48"
                        >
                          <defs>
                            <path
                              id="a"
                              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                            />
                          </defs>
                          <clipPath id="b">
                            <use href="#a" overflow="visible" />
                          </clipPath>
                          <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                          <path
                            clipPath="url(#b)"
                            fill="#EA4335"
                            d="M0 11l17 13 7-6.1L48 14V0H0z"
                          />
                          <path
                            clipPath="url(#b)"
                            fill="#34A853"
                            d="M0 37l30-23 7.9 1L48 0v48H0z"
                          />
                          <path
                            clipPath="url(#b)"
                            fill="#4285F4"
                            d="M48 48L17 24l-4-3 35-10z"
                          />
                        </svg>
                        <span className="ml-4">Sign In with Google</span>
                      </div>
                    </button>

          

          <p className="mt-8">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 underline hover:text-blue-700 font-semibold"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
