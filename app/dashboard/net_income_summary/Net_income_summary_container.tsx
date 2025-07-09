'use client';
import React, { useEffect, useState } from 'react';
import { FaDollarSign, FaAngleUp } from 'react-icons/fa';
import Net_income_summary_holder from './net_income_summary_holder';
import { api_url } from '@/app/login/Login';
type RevenuesType = {
  total_revenue: number;
  total_expense: number;
};
const Net_income_summary_container = () => {
  const [revenues_data, set_revenues] = useState<RevenuesType | null>(null);
  useEffect(() => {
    fetch(`${api_url}/revenues`, {
      method: 'GET',
      credentials: 'include',
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      if (data) {
        set_revenues(data);
      }
    });
  }, []);
  return (
    <div className="bg-white rounded-2xl p-3 mt-5 ">
      <div className="flex items-center mb-3">
        <FaDollarSign
          className="bg-green-100 p-1 rounded-full border-1 border-green-400 color-green-500"
          size={20}
        />
        <h2 className="font-bold ms-1">Net Income Summary</h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-1">
        <Net_income_summary_holder
          color="sky"
          title="Total Revenue"
          text=""
          amount={Number(revenues_data?.total_revenue)}
          position="pre"
        />
        <Net_income_summary_holder
          color="red"
          title="Total Expense"
          text=""
          amount={Number(revenues_data?.total_expense)}
          position="pre"
        />
        <Net_income_summary_holder
          color="green"
          title="Net Income"
          text=""
          position="pre"
          amount={
            Number(revenues_data?.total_revenue) -
            Number(revenues_data?.total_expense)
          }
        />
        <Net_income_summary_holder
          color="purple"
          position="post"
          title="Profit Margin"
          text="৳"
          amount={
            Number(revenues_data?.total_revenue) == 0
              ? 0
              : ((Number(revenues_data?.total_revenue) -
                  Number(revenues_data?.total_expense)) /
                  Number(revenues_data?.total_revenue)) *
                100
          }
        />
      </div>
    </div>
  );
};

export default Net_income_summary_container;
