import React from 'react';

const page = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 rounded ">
      <div
        className="w-[90%] md:w-[40%] lg:w-[30%] mx-auto bg-white-400 mb-10 mt-10 rounded-2xl"
        style={{ background: 'white', padding: '20px' }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-3 mt-10 ">
          Create Student Account
        </h2>

        <form className="space-y-5 mt-10">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name<span className="text-red-600 text-1xl"> *</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-600 text-1xl"> *</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-600 text-1xl"> *</span>
            </label>
            <input
              type="text"
              id="number"
              name="number"
              required
              placeholder="eg:013112******* or +8801312*******"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-600 text-1xl"> *</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password<span className="text-red-600 text-1xl"> *</span>
            </label>
            <input
              type="password"
              id="cnf_password"
              name="cnf_password"
              required
              placeholder="Confirm your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div className="mt-1">
            <input type="checkbox" required name="remember" id="remember" />
            <span className="ms-1 " style={{ color: 'black' }}>
              {' '}
              I agree to the{' '}
              <span className="text-green-600">
                Terms and Conditions
              </span> and <span className="text-green-600">Privacy</span>
              Policy
            </span>
          </div>
          <button
            type="submit"
            className="bg-green-500 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have a account?
          <a href="/login" className="text-green-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>{' '}
    </div>
  );
};

export default page;
