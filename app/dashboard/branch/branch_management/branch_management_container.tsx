'use client';
import React, { useState } from 'react';
import Branch_registration from './branch_registration';
import All_branches from './All_branches';

const Branch_management_container = () => {
  const [want_to_registration, set_want_to_registration] = useState(false);

  return (
    <div className="text-black w-[98%] bg-white min:h-full rounded-2xl p-6">
      {!want_to_registration ? (
        <div>
          <div className="flex flex-wrap justify-between">
            <h1 className="text-2xl font-bold">All branches</h1>
            <button
              type="button"
              onClick={() => set_want_to_registration(!want_to_registration)}
              className="bg-green-600 hover:bg-green-600 p-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Registration A new branch
            </button>
          </div>
          <All_branches />
        </div>
      ) : (
        <Branch_registration
          set_want_to_registration={set_want_to_registration}
        />
      )}
    </div>
  );
};

export default Branch_management_container;
