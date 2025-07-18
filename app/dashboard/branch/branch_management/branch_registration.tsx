import { api_url } from '@/app/login/Login';
import React, { FormEvent, useState } from 'react';
import { IoPlayBackOutline } from 'react-icons/io5';

// branch_name, branch_code, location, district, contact_number, email
const Branch_registration = ({
  set_want_to_registration,
}: {
  set_want_to_registration: Function;
}) => {
  const [name, setName] = useState('');
  const [address, set_address] = useState('');
  const [city, set_city] = useState('');
  const [state, set_state] = useState('');
  const [postal_code, set_postal_code] = useState('');
  const [branch_phone, set_branch_phone] = useState('');
  const [branch_email, set_branch_email] = useState('');
  const handle_submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`${api_url}/branches`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        branch_name: name,
        address,
        city,
        state,
        postal_code,
        branch_phone_number: branch_phone,
        branch_email,
      }),
    });
    const data = await res.json();
    if (data?.branch_id) set_want_to_registration(false);
  };

  return (
    <div className="text-black">
      <button
        onClick={() => set_want_to_registration(false)}
        className="d-inline bg-green-400 p-6 rounded text-white font-bold py-1"
      >
        Back
      </button>

      <div>
        <div className="flex items-center justify-center bg-white-100 rounded w-full bg-white">
          <div
            className="w-[90%] md:w-[50%] lg:w-[50%] mx-auto  mb-10 mt-10 rounded-2xl"
            style={{ background: 'white', padding: '20px' }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 ">
              Branch Registration
            </h2>
            <hr />

            <form className="space-y-5 mt-10" onSubmit={handle_submit}>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Branch Name
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="Branch_name"
                  name="Branch_name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter your Branch name"
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
                  onChange={(e) => set_address(e.target.value)}
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
                    onChange={(e) => set_city(e.target.value)}
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
                    onChange={(e) => set_state(e.target.value)}
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
                    onChange={(e) => set_postal_code(e.target.value)}
                    placeholder="Zip code/ postal"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
                <div className="lg:w-1/2 w-full">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Branch Phone Number *
                    <span className="text-red-600 text-1xl"> *</span>
                  </label>
                  <input
                    type="text"
                    id="branch_phone"
                    name="branch_phone"
                    onChange={(e) => set_branch_phone(e.target.value)}
                    placeholder="branch phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-4 ">
                <div className="lg:w-1/2 w-full">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Branch Email{' '}
                    <span className="text-red-600 text-1xl"> *</span>
                  </label>
                  <input
                    type="email"
                    id="branch_email"
                    name="branch_email"
                    required
                    onChange={(e) => set_branch_email(e.target.value)}
                    placeholder="branch email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <input type="checkbox" />{' '}
                <span className="text-gray-600 ms-1">
                  I agree to receive updates, tips, and promotional messages.
                  You can unsubscribe at any time.
                </span>
              </div>
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-600 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Registration A new branch
              </button>
            </form>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default Branch_registration;
