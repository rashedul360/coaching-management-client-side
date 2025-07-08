import React, { FormEvent, useEffect, useState } from 'react';
import { weekDays } from './data';
import { api_url } from '@/app/login/Login';
type Branch = {
  branch_id: string;
  coaching_center_id: string;
  branch_name: string;
};
const Batch_registration = ({
  set_want_to_registration,
}: {
  set_want_to_registration: Function;
}) => {
  const [batch_name, set_batch_name] = useState('');
  const [start_date, set_start_date] = useState('');
  const [end_date, set_end_date] = useState('');
  const [batch_type, set_batch_type] = useState('');
  const [batch_fee, set_batch_fee] = useState('');
  const [available_seat, set_available_seat] = useState('');
  const [branches, set_branches] = useState([]);
  const [branch_and_center_id, set_branch_and_center_id] = useState('');
  const [selected, set_selected] = useState<
    {
      name_bn: string;
      name_en: string;
      id: number;
    }[]
  >([]);
  const handle_select = (data: {
    name_bn: string;
    name_en: string;
    id: number;
  }) => {
    const found_data = selected.find((d: { id: number }) => d.id === data.id);

    if (!found_data) {
      let arr = [...selected, data];
      set_selected(arr);
    } else {
      const updated = selected.filter((d) => d.id !== data.id);
      set_selected(updated);
    }
  };
  useEffect(() => {
    fetch(`${api_url}/branches`, {
      method: 'GET',
      credentials: 'include',
    }).then(async (data) => {
      const res = await data.json();
      if (res?.success) {
        set_branches(res?.branches);
      }
    });
  }, []);

  const handle_submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${api_url}/batches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        batch_name,
        start_date,
        end_date,
        batch_type,
        batch_fee,
        available_seat,
        schedules: selected,
        branch_and_center_id,
      }),
    }).then(async (res) => {
      const data = await res.json();
      if (data?.success) set_want_to_registration(false);
    });
  };

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

            <form className="space-y-5 mt-10" onSubmit={handle_submit}>
              <div>
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Batch Name
                  <span className="text-red-600 text-1xl"> *</span>
                </label>
                <input
                  type="text"
                  id="batch_name"
                  name="batch_name"
                  onChange={(e) => set_batch_name(e.target.value)}
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
                  onChange={(e) => set_start_date(e.target.value)}
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
                  onChange={(e) => set_end_date(e.target.value)}
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
                  {weekDays.map((week_day) => {
                    const is_selected = selected.find(
                      (selct) => selct.id == week_day.id
                    );
                    return (
                      <div
                        key={week_day.id}
                        className={`text-black p-4 py-2 bg-${
                          is_selected ? 'green' : 'red'
                        }-400 rounded cursor-pointer`}
                        onClick={() =>
                          handle_select({
                            name_bn: week_day.name_bn,
                            name_en: week_day.name_en,
                            id: week_day.id,
                          })
                        }
                      >
                        <h1>{week_day.name_bn}</h1>
                      </div>
                    );
                  })}
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
                  onChange={(e) => set_batch_type(e.target.value)}
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
                  onChange={(e) => set_branch_and_center_id(e.target.value)}
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  <option value="">Select a branch</option>
                  {branches?.map((branch: Branch) => (
                    <option
                      key={branch.branch_id}
                      value={`${branch?.branch_id}__BACID__${branch?.coaching_center_id}`}
                    >
                      {branch.branch_name}
                    </option>
                  ))}
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
                  onChange={(e) => set_batch_fee(e.target.value)}
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
                  onChange={(e) => set_available_seat(e.target.value)}
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
