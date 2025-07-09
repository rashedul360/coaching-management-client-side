'use client';
import React, { useEffect, useState } from 'react';
import Summery_holder from './Summery_holder';

import { BiMoney } from 'react-icons/bi';
import { api_url } from '@/app/login/Login';
type RevenuesType = {
  total_revenue: number;
};
const Total_revenue = () => {
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
    <div>
      <Summery_holder
        title={'Total Revenues'}
        count={revenues_data?.total_revenue ?? 0}
        icon={<BiMoney />}
        color="pink"
        text="৳"
      />
    </div>
  );
};

export default Total_revenue;
