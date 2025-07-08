import Is_logged_in from '@/security_components/Is_logged_in';
import React from 'react';
import DashboardLayout from '../dash_components/Dash_template/Dash_layout';

import Branch_management_container from './branch_management/branch_management_container';
import Is_coaching_owner from '@/security_components/Is_coaching_owner';

const page = () => {
  return (
    <div>
      <Is_logged_in
        children={
          <Is_coaching_owner
            children={
              <DashboardLayout children={<Branch_management_container />} />
            }
          />
        }
      />
    </div>
  );
};

export default page;
