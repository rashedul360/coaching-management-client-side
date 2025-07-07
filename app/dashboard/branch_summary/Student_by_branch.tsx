import React from 'react';
import { FaUniversity, FaBuilding } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
const Student_by_branch = () => {
  return (
    <div>
      <div className="flex items-center mt-2">
        <FaUniversity />
        <h1 className="text-md font-bold ms-1">Student count By Branch</h1>
      </div>
      <div>
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex flex-wrap p-4">
            <FaBuilding
              size={40}
              color="green"
              className="p-3 bg-green-100 rounded"
            />

            <div className="ms-2">
              <h3 className="text-sm font-bold">Framegate Branch</h3>
              <div className="flex items-center">
                <FaLocationDot size={10} color="gray" />
                <h4 className="text-gray-500 text-sm">Framegate</h4>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-green-600">30</h2>
            <p className="text-sm text-gray-500 mt-[-10px]">students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student_by_branch;
