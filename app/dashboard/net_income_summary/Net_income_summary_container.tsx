import React from 'react';
import { FaDollarSign, FaAngleUp } from 'react-icons/fa';
import Net_income_summary_holder from './net_income_summary_holder';
const Net_income_summary_container = () => {
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
          title="total revenue"
          amount={200}
        />
        <Net_income_summary_holder
          color="red"
          title="total revenue"
          amount={200}
        />
        <Net_income_summary_holder
          color="green"
          title="total revenue"
          amount={200}
        />
        <Net_income_summary_holder
          color="purple"
          title="total revenue"
          amount={200}
        />
      </div>
    </div>
  );
};

export default Net_income_summary_container;
