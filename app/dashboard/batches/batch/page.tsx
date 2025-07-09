'use client';
import Is_coaching_owner from '@/security_components/Is_coaching_owner';
import Is_logged_in from '@/security_components/Is_logged_in';
import React from 'react';

import Batch_wrapper from './batch_wrapper';

const page = () => {
  return (
    <div>
      <Is_logged_in
        children={
          <Is_coaching_owner
            children={
              <div className="bg-[#ddd]">
                <Batch_wrapper />
              </div>
            }
          />
        }
      />
    </div>
  );
};

export default page;
