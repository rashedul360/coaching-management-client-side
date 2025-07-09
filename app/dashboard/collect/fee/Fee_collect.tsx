'use client';
import { api_url } from '@/app/login/Login';
import React, { useEffect, useState } from 'react';

const Fee_collect = () => {
  const [phone_number, set_phone_number] = useState('');
  const [amount, set_amount] = useState('');
  const [fee_type, set_fee_type] = useState('cash');
  const [is_loading, set_isloading] = useState(true);
  const [is_error, set_is_error] = useState(false);
  const [fee_data, set_fee_data] = useState<{
    success: boolean;
    message: string;
    is_show: boolean;
    error: boolean;
    status: boolean;
  }>();
  const handle_submit = async (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`${api_url}/collection/fee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone_number,
        amount,
        fee_type,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data) {
          set_fee_data({ ...data, is_show: true });
        }
      })
      .catch((err) => {
        set_is_error(err);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      set_fee_data({
        success: false,
        error: true,
        message: '',
        status: false,
        is_show: false,
      });
    }, 10000);
  }, [fee_data]);
  return (
    <div className="text-black">
      <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
        {fee_data?.success && (
          <div className="text-white bg-green-400 p-3 rounded mt-3">
            {fee_data?.message}
          </div>
        )}
        {fee_data?.error && fee_data.is_show && (
          <div className="text-white bg-red-400 p-3 rounded mt-3">
            {fee_data?.message}
          </div>
        )}

        <h2 className="text-2xl font-semibold text-center mb-6 mt-4">
          Student Fee Collection
        </h2>

        <form className="space-y-4" onSubmit={handle_submit}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Student Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter student phone number"
              required
              onChange={(e) => set_phone_number(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              required
              onChange={(e) => set_amount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Payment Method
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
              onChange={(e) => set_fee_type(e.target.value)}
            >
              <option selected value="cash">
                Cash
              </option>
              <option value="bkash">bKash</option>
              <option value="nagad">Nagad</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
          >
            Collect Fee
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fee_collect;
