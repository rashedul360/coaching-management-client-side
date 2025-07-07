import React from 'react';
import { subjects, education_levels } from './data';
const page = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-white-100 rounded w-full bg-white">
        <div
          className="w-[90%] md:w-[50%] lg:w-[50%] mx-auto  mb-10 mt-10 rounded-2xl"
          style={{ background: 'white', padding: '20px' }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 ">
            CVIT CCM
          </h2>
          <hr />
          <div className="mt-4 bg-green-200 p-6 rounded-sm mt-10">
            <div className="flex">
              <div>
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/5974/5974759.png "
                  alt=""
                  width={25}
                  height={25}
                />
              </div>
              <h1 className="text-green-700 font-bold text-1.7xl ms-1">
                selected Plan: free
              </h1>
            </div>
            <p className="text-green-500">
              You can change your plan at any time after registration.
            </p>
          </div>
          <form className="space-y-5 mt-10">
            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">
                Coaching Center Name
                <span className="text-red-600 text-1xl"> *</span>
              </label>
              <input
                type="text"
                id="coaching_Name"
                name="coaching_Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your coaching center name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-600 text-1xl"> *</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="street address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="flex gap-4 ">
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  City <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="city"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  State/Division
                  <span className="text-red-600 text-1xl"> </span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="state"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Postal/ZIP Code
                  <span className="text-red-600 text-1xl"> </span>
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder="Zip code/ postal"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Center Phone Number *
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="center_phone"
                  name="center_phone"
                  placeholder="center phone number"
                  defaultValue={'login credential number'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Center Email <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="email"
                  id="center_email"
                  name="center_email"
                  required
                  placeholder="Center email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Website (If any)
                  <span className="text-red-600 text-1xl"> </span>
                </label>
                <input
                  type="text"
                  id="website_address"
                  name="website_address"
                  placeholder="https://yourwebsite.com "
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Year Established
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="establish"
                  name="establish"
                  required
                  placeholder="Eg: 2024"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <h2 className="text-black mt-4">Your Custom Portal</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subdomain <span className="text-red-600 text-1xl"> *</span>
              </label>
              <input
                type="test"
                id="subdomain"
                name="subdomain"
                required
                placeholder="Your center"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <p className="text-gray-400">
                Your center's custom URL will be yourcenter.cvitccm.com
              </p>
            </div>

            <h2 className="mt-4 text-black">Primary Contact Person</h2>
            <div className="flex gap-4 ">
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="primary_contact_person"
                  name="primary_contact_person"
                  required
                  placeholder="MD. Rashedul islam"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Position/Designation
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="primary_contact_person_position"
                  name="primary_contact_person_position"
                  required
                  placeholder="e.g. Director, principal"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="primary_contact_phone"
                  name="primary_contact_phone"
                  required
                  placeholder="013124*****"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Email
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="primary_contact_person_email"
                  name="primary_contact_person_email"
                  required
                  placeholder="Email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            </div>
            <h2 className="mt-6 text-black text-lg mb-[-0px]">
              Coaching Center Details:
            </h2>
            <hr />
            <label htmlFor="teachers_count" className="text-gray-600">
              Number of Teachers
            </label>
            <br />
            <input
              type="number"
              placeholder="e.g. 10"
              name="teachers_count"
              id="teachers_count"
              className="w-[50%] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></input>
            <h2>
              <span className="text-gray-600">Subjects Taught</span>{' '}
              <span className="text-red-700">*</span>
            </h2>
            <div className="flex flex-wrap mt-[-9px]">
              {subjects.map((subject) => (
                <div className="lg:w-1/3 w-1/2" key={subject.id}>
                  <input type="checkbox" defaultChecked={false} />
                  <span className="ms-1 text-black">{subject.name}</span>
                </div>
              ))}
            </div>
            <h2>
              <span className="text-black">Education Levels</span>{' '}
              <span className="text-red-700">*</span>
            </h2>
            <div className="flex flex-wrap mt-[-9px]">
              {education_levels.map((education_level) => (
                <div className="lg:w-1/3 w-1/2" key={education_level.id}>
                  <input type="checkbox" defaultChecked={false} />
                  <span className="ms-1 text-black">
                    {education_level.level}
                  </span>
                </div>
              ))}
            </div>
            <h2 className="mt-6  text-black text-lg mb-[-0px]">
              Account Setup
            </h2>
            <hr />
            <label htmlFor="couching_username" className="text-gray-600">
              Username <span className="text-red-700"> *</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="choose username"
              name="couching_username"
              id="couching_username"
              className="w-[50%] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></input>
            <div className="flex flex-wrap">
              <div className="lg:w-1/2 w-full">
                <label htmlFor="couching_password" className="text-gray-600">
                  Password <span className="text-red-700"> *</span>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="password"
                  name="couching_password"
                  id="couching_password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                ></input>
              </div>
              <div className="lg:w-1/2 w-full">
                <label
                  htmlFor="couching_confirm_password_"
                  className="text-gray-600"
                >
                  Confirm Password <span className="text-red-700"> *</span>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="confirm password"
                  name="couching_confirm_password_"
                  id="couching_confirm_password_"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                ></input>
              </div>
            </div>
            <div className="mt-4">
              <input type="checkbox" />{' '}
              <span className="text-gray-600 ms-1">
                I agree to receive updates, tips, and promotional messages. You
                can unsubscribe at any time.
              </span>
            </div>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Registration your coaching center
            </button>
          </form>
          <p className="text-center mt-3 text-[12px] text-black">
            By registering, you agree to our{' '}
            <span className="text-green-600">Terms of Service</span> and
            <span className="text-green-600"> Privacy Policy</span>
          </p>
        </div>{' '}
      </div>
    </div>
  );
};

export default page;
