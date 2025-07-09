'use client';
import React, { useEffect, useState } from 'react';
import Summery_holder from './Summery_holder';
import { FaUsers } from 'react-icons/fa';
import { api_url } from '@/app/login/Login';

const Total_branches = () => {
  const [branches, set_branches] = useState([]);
  useEffect(() => {
    fetch(`${api_url}/branches`, {
      credentials: 'include',
    }).then(async (res) => {
      const data = await res.json();
      if (data?.success) {
        set_branches(data?.branches);
      }
    });
  }, []);
  return (
    <Summery_holder
      title={'Active Branches'}
      count={branches.length}
      icon={<FaUsers />}
      color="orange"
      text=""
    />
  );
};

export default Total_branches;
