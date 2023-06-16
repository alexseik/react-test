import React, { useState } from "react";
import { useApi } from "./context/context";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberUser, setRememberUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const api = useApi();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberUser = () => {
    setRememberUser(!rememberUser);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const user = await api.login(email, password);
      console.log('Login successful:', user);
    } catch (error) {
      console.error('Login failed:', error);
    }

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember User:", rememberUser);

    setEmail("");
    setPassword("");
    setRememberUser(false);
    setErrorMessage("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className="absolute right-0 top-0 mr-4 mt-2"
              onClick={handleShowPassword}
              type="button"
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.07 8l2.5-2.5L19.07 3M4.93 16L2.43 18.5 4.93 21M21 3l-9.17 9.17m0 0L11 13l-1.17 1.17m9.17-9.17A10 10 0 1112 22a9.93 9.93 0 019.17-14.17z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 1v2m0 18v2m-8-9h2m18 0h-2M4 6l.01-1.795A1.997 1.997 0 016.003 3h11.994c.537 0 1.047.21 1.425.588l.581.581A1.997 1.997 0 0119 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6h0zM4 6h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input className="mr-2 leading-tight" type="checkbox" onClick={handleRememberUser}/>
            <span className="text-sm">Remember user</span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
