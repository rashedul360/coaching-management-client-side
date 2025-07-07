import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaChair, FaClock, FaLayerGroup } from 'react-icons/fa';

const All_batches = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full">
      <h2 className="text-xl font-bold text-gray-800 mb-2">name</h2>

      <div className="text-gray-600 text-sm mb-2 flex items-center gap-2">
        <FaCalendarAlt className="text-blue-500" />
        <span>startDate - endDate</span>
      </div>

      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
        <FaLayerGroup className="text-purple-500" />
        <span>Type: batchType</span>
      </div>

      <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
        <FaChair className="text-green-500" />
        <span>Seats: availableSeats</span>
      </div>

      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1 text-gray-700 font-semibold">
          <FaClock className="text-orange-500" />
          <span>Schedule:</span>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-700 ml-6">
          {/* {schedule.map((s, index) => (
            <li key={index}> */}
          s.day: s.time
          {/* </li>
          ))} */}
        </ul>
      </div>
      <Link href={`/dashboard/batches/batch?batch-id=dfgdfg`}>
        <button
          type="button"
          className="cursor-pointer bg-green-600 hover:bg-green-600 p-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Go to Batch
        </button>
      </Link>
    </div>
  );
};

export default All_batches;
