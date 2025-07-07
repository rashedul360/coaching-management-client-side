import React from 'react';
import { weekDays } from './data';
const Batch_registration = ({
  set_want_to_registration,
}: {
  set_want_to_registration: Function;
}) => {
  return (
    <div>
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
              Batch Registration
            </h2>
            <hr />

            <form className="space-y-5 mt-10">
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Batch Name
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="batch_name"
                  name="batch_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter Batch Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="date"
                  id="start_date"
                  name="start_date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="date"
                  id="end_date"
                  name="end_date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Batch Schedule
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {weekDays.map((week_day) => (
                    <div
                      key={week_day.id}
                      className="text-black p-4 py-2 bg-green-400 rounded"
                    >
                      <h1>{week_day.name_bn}</h1>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Batch Type
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <select
                  name="batch_type"
                  id="batch_type"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  <option value="">Select an option</option>
                  <option value="regular">Regular</option>
                  <option value="crash_course">Crash course</option>
                  <option value="model_test">Model Test</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  branch Name
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <select
                  name="branch_name"
                  id="branch_name"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  <option value="">Select a branch</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Batch Fee
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  id="batch_fee"
                  name="batch_fee"
                  type="number"
                  placeholder="Batch Fee"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Available Seats:
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  id="available_batch_seat"
                  name="available_batch_seat"
                  type="number"
                  placeholder="Enter available seat"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer bg-green-700 hover:bg-green-600 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
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

export default Batch_registration;
