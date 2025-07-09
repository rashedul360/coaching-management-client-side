import React from 'react';

import Fee_container from './Fee_container';
import Is_logged_in from '@/security_components/Is_logged_in';
import Is_coaching_owner from '@/security_components/Is_coaching_owner';

const page = () => {
  return (
    <div>
      <Is_logged_in
        children={<Is_coaching_owner children={<Fee_container />} />}
      />
    </div>
  );
};

export default page;
