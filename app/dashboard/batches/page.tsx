'use client';
import Is_logged_in from '@/security_components/Is_logged_in';
import React, { useState } from 'react';
import DashboardLayout from '../dash_components/Dash_template/Dash_layout';
import Batch_registration from './batch_registration';
import All_batches from './All_batches';

const page = () => {
  const [want_to_registration, set_want_to_registration] = useState(false);
  return (
    <div>
      <Is_logged_in
        children={
          <DashboardLayout
            children={
              <div className="bg-white text-black p-7">
                {!want_to_registration && (
                  <div className="flex flex-wrap justify-between">
                    <h1 className="text-2xl font-bold">All Batches</h1>
                    <button
                      type="button"
                      onClick={() =>
                        set_want_to_registration(!want_to_registration)
                      }
                      className="bg-green-600 hover:bg-green-600 p-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      Registration A new branch
                    </button>
                  </div>
                )}
                {want_to_registration ? (
                  <Batch_registration
                    set_want_to_registration={set_want_to_registration}
                  />
                ) : (
                  <All_batches />
                )}
              </div>
            }
          />
        }
      />
    </div>
  );
};

export default page;
