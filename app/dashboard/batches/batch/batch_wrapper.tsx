'use client'; // only for app directory client components

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Add_student from './Add_student';
import Batch_info from './Batch_info';

const Batch_wrapper = () => {
  const [batch_info, set_batch_info] = useState({
    students: [],
  });
  const searchParams = useSearchParams();
  const name = searchParams.get('batch-name');
  const id = searchParams.get('batch-id');

  useEffect(() => {
    if (!name || !id) {
      window.location.href = '/dashboard/batches';
    }
  }, []);
  return (
    <div className="p-6 text-black h-[100vh] bg-white w-[90%] mx-auto rounded-2xl ">
      <div className="flex justify-between">
        <Link
          href={'/dashboard/batches'}
          className="text-center bg-green-600 py-1 rounded-md p-6 btn text-white"
        >
          Back
        </Link>
        {/* <h2 className="text-center text-2xl">Batch Info of {id} </h2> */}
        <h2 className="text-center  text-gray-400 text-sm">{id}</h2>
      </div>
      <Batch_info
        batch_id={String(id)}
        batch_name={String(name)}
        set_batch_info={set_batch_info}
      />
      <div className="flex justify-between items-center mt-5">
        <h2 className="text-xl font-semibold">Enrolled Students</h2>
        <Add_student batch_info={batch_info} />
      </div>
      <div className="bg-white mt-4 rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300">#ID</th>
              <th className="px-4 py-2 border-b border-gray-300">Name</th>
              <th className="px-4 py-2 border-b border-gray-300">
                Enroller Date
              </th>
            </tr>
          </thead>
          <tbody>
            {batch_info?.students?.map(
              (student: {
                student_id: string;
                name: string;
                createdAt: string;
              }) => (
                <tr className="hover:bg-gray-50">
                  <th className="px-4 py-2 border-b border-gray-300">
                    {student.student_id}
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300">
                    {student.name}
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300">
                    {student.createdAt}
                  </th>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Batch_wrapper;
