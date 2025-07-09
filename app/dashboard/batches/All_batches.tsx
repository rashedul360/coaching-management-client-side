import { api_url } from '@/app/login/Login';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaChair, FaClock, FaLayerGroup } from 'react-icons/fa';

const All_batches = () => {
  const [batches, set_batches] = useState([]);
  useEffect(() => {
    fetch(`${api_url}/batches`, {
      credentials: 'include',
    }).then(async (res) => {
      const data = await res.json();
      if (data?.success) {
        set_batches(data?.batches);
      }
    });
  }, []);
  type Batch = {
    batch_id: string;
    batch_name: string;
    start_date: string;
    coaching_center_id: string;
    branch_id: string;
    end_date: string;
    batch_type: string;
    batch_fee: string;
    available_seats: string;
    schedules: any;
  };
  type schedule = {
    schedule_id: string;
    name_bn: string;
    name_en: string;
  };
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
      {batches?.length > 0 ? (
        <>
          {batches?.map((batch: Batch) => (
            <div
              className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full"
              key={batch.batch_id}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {batch?.batch_name}
              </h2>

              <div className="text-gray-600 text-sm mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" />
                <span>
                  {batch.start_date} - {batch.end_date}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                <FaLayerGroup className="text-purple-500" />
                <span>Type: {batch.batch_type}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                <FaChair className="text-green-500" />
                <span>Seats: {batch.available_seats}</span>
              </div>

              <div className="mb-2">
                <div className="flex items-center gap-2 mb-1 text-gray-700 font-semibold">
                  <FaClock className="text-orange-500" />
                  <span>Schedule:</span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 ml-6">
                  {batch.schedules.map((s: schedule) => (
                    <li key={s.schedule_id}>
                      {s.name_bn} ~ {s.name_en}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/dashboard/batches/batch?batch-id=${batch.batch_id}&batch-name=${batch.batch_name}`}
              >
                <button
                  type="button"
                  className="cursor-pointer bg-green-600 hover:bg-green-600 p-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Go to Batch
                </button>
              </Link>
            </div>
          ))}
        </>
      ) : (
        'no data'
      )}
    </div>
  );
};

export default All_batches;
