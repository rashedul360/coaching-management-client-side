'use client';
import React, { useEffect, useState } from 'react';
import Summery_holder from './Summery_holder';
import { FaUsers } from 'react-icons/fa';
import { api_url } from '@/app/login/Login';

const Total_student = () => {
  const [students, set_students] = useState([]);
  useEffect(() => {
    fetch(`${api_url}/students`, {
      credentials: 'include',
    }).then(async (res) => {
      const data = await res.json();
      if (data?.success) {
        set_students(data?.students);
      }
    });
  }, []);
  return (
    <Summery_holder
      title={'Total Students'}
      count={students.length}
      icon={<FaUsers />}
      color="green"
      text=""
    />
  );
};

export default Total_student;
