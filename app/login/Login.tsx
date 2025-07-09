'use client';

import { usePathname } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export const api_url = process.env.NEXT_PUBLIC_API_URL;
const Login = () => {
  const pathname = usePathname();
  const [phone, set_phone] = useState('');
  const [password, set_password] = useState('');
  const [data, set_data] = useState({ success: true, message: '' });
  const handle_submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`${api_url}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, password }),
    });
    const data = await res.json();
    set_data(data);

    if (data?.user_info?.ac_type === 'COACHING') {
      window.location.href = '/dashboard';
    } else {
      if (data?.success) {
        window.location.href = pathname || '/portal';
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="w-[90%] md:w-[30%] mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Sign in to Access your account
        </p>

        <form className="space-y-5" onSubmit={handle_submit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number<span className="text-red-600 text-1xl"> *</span>
            </label>
            <input
              type="text"
              id="number"
              name="number"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="eg:013112******* or +8801312*******"
              onChange={(e) => {
                set_phone(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password<span className="text-red-600 text-1xl"> *</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => {
                set_password(e.target.value);
              }}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="mt-1">
            <input type="checkbox" required name="remember" id="remember" />
            <span className="ms-1 " style={{ color: 'black' }}>
              {' '}
              Remember Me
            </span>
          </div>
          <button
            type="submit"
            className="bg-green-500 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
        {!data?.success && (
          <div className="bg-red-400 mt-3 p-2">{data?.message}</div>
        )}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?
          <a href="/signup" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
