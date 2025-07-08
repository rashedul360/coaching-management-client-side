'use client';
import React, { FormEvent, useState } from 'react';
import { subjects, education_levels } from './data';
import { api_url } from '@/app/login/Login';
const Coaching_registration = () => {
  const [data, set_data] = useState({ message: '', success: false });
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal_code, setPostalCode] = useState('');
  const [center_phone_number, setCenterPhoneNumber] = useState('');
  const [center_email, setCenterEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [established, setEstablished] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [password, set_password] = useState('');
  const [confirm_password, set_confirm_password] = useState('');
  const [primary_contact_person_name, setPrimaryContactPersonName] =
    useState('');
  const [primary_contact_person_position, setPrimaryContactPersonPosition] =
    useState('');
  const [primary_contact_person_phone, setPrimaryContactPersonPhone] =
    useState('');
  const [primary_contact_person_email, setPrimaryContactPersonEmail] =
    useState('');
  const [subjects_, setSubjects_] = useState([]); // array
  const [levels_, setLevels_] = useState([]); // array
  const [number_of_teacher, set_number_of_teacher] = useState(0);
  const handle_submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirm_password) return alert('not password matched');
    const res = await fetch(`${api_url}/register/coaching`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        address,
        city,
        state,
        postal_code,
        center_phone_number,
        center_email,
        website,
        established,
        subdomain,
        primary_contact_person_name,
        primary_contact_person_position,
        primary_contact_person_phone,
        primary_contact_person_email,
        subjects_,
        levels_,
        number_of_teacher,
        password,
      }),
    });
    const data = await res.json();
    set_data(data);
  };
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
          <form className="space-y-5 mt-10" onSubmit={handle_submit}>
            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">
                Coaching Center Name
                <span className="text-red-600 text-1xl"> *</span>
              </label>
              <input
                type="text"
                id="coaching_Name"
                name="coaching_Name"
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setAddress(e.target.value)}
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
                  onChange={(e) => setCity(e.target.value)}
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
                  onChange={(e) => setState(e.target.value)}
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
                  onChange={(e) => setPostalCode(e.target.value)}
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
                  onChange={(e) => setCenterPhoneNumber(e.target.value)}
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
                  onChange={(e) => setCenterEmail(e.target.value)}
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
                  onChange={(e) => setWebsite(e.target.value)}
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
                  onChange={(e) => setEstablished(e.target.value)}
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
                onChange={(e) => setSubdomain(e.target.value)}
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
                  onChange={(e) => setPrimaryContactPersonName(e.target.value)}
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
                  onChange={(e) =>
                    setPrimaryContactPersonPosition(e.target.value)
                  }
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
                  onChange={(e) => setPrimaryContactPersonPhone(e.target.value)}
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
                  onChange={(e) => setPrimaryContactPersonEmail(e.target.value)}
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
              required
              onChange={(e) => set_number_of_teacher(Number(e.target.value))}
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
              required
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
                  required
                  onChange={(e) => set_password(e.target.value)}
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
                  required
                  onChange={(e) => set_confirm_password(e.target.value)}
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
          {!data?.success && data.message.length > 0 && (
            <div className="bg-red-400 mt-3 p-2">{data?.message}</div>
          )}
          {data?.success && data.message.length > 0 && (
            <div className="bg-green-400 mt-3 p-2">{data?.message}</div>
          )}
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

export default Coaching_registration;
