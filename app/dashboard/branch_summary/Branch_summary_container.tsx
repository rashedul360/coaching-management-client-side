'use client';
import React, { useEffect, useState } from 'react';

import Revenue_by_branch from './Revenue_by_branch';
import Student_by_branch from './Student_by_branch';
import { api_url } from '@/app/login/Login';

const Branch_summary_container = () => {
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
    <div>
      <div className="grid  gap-3 mt-4 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 ">
        <div className="bg-white p-4 rounded-md">
          <Student_by_branch branches={branches} />
        </div>
        <div className="bg-white p-4 rounded-md">
          <Revenue_by_branch branches={branches} />
        </div>
      </div>
    </div>
  );
};

export default Branch_summary_container;
