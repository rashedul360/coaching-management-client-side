import Is_logged_in from '@/security_components/Is_logged_in';
import React from 'react';
import DashboardLayout from './dash_components/Dash_template/Dash_layout';

import Dash_container from './dash_components/Dash_container/Dash_container';
import Is_coaching_owner from '@/security_components/Is_coaching_owner';

const page = () => {
  return (
    <div>
      <Is_logged_in
        children={
          <Is_coaching_owner
            children={<DashboardLayout children={<Dash_container />} />}
          />
        }
      />
    </div>
  );
};

export default page;
