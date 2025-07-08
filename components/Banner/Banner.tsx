import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 mt-20 mb-20">
      <div className="flex-1 p-6 shadow rounded-xl">
        <div>
          <h1 className="text-6xl">
            Streamline Your Coaching Center Management
          </h1>
          <p className="mt-6 mb-6">
            An all-in-one platform for student enrollment, attendance tracking,
            exam management, and financial analytics
          </p>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/register/coaching"
              className="bg-[#079669] text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
            >
              Get Started
            </Link>
            <Link href="/login" className="text-[#079669] hover:text-primary">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1  p-6 shadow rounded-xl">
        <img
          src="https://ccm.codervai.com/_next/image?url=%2Fassets%2Fimages%2Fdashboad.png&w=1200&q=75"
          alt=""
          className="rounded"
        />
      </div>
    </div>
  );
};

export default Banner;
