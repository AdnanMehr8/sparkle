
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);

    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-500 text-center mb-4">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="h-5 w-5 rounded border-gray-300 focus:ring-1 focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="text-sm ml-3 text-gray-700">
              Keep me signed in
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#">Learn more about Air Drive on Spark.pl</a>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Not registered yet? Create an Account
        </p>
      </div>
      <div className="flex-1 bg-red-500 rounded-r-lg">
        <div className="p-4 text-white">
          <h2 className="text-2xl font-bold mb-4">Welcome to Spark Rides!</h2>
          <p className="text-lg mb-2">Experience the ultimate ride-sharing experience.</p>
          <p className="mb-2">Join Spark Rides today and enjoy:</p>
          <ul className="list-disc ml-6">
            <li>Safe and reliable transportation</li>
            <li>Affordable prices</li>
            <li>24/7 availability</li>
          </ul>
          <a href="#" className="mt-4 inline-block bg-white text-red-500 px-4 py-2 rounded-md font-medium hover:bg-gray-200">
            Learn More
          </a>
        </div>
        {/* Additional Content */}
      </div>
      <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
        <p>© 2024 Spark</p>
        <a href="#" className="ml-4">
          License
        </a>
        <a href="#" className="ml-4">
          Terms of Use
        </a>
      </div>
    </div>
  );
}

export default Login;
