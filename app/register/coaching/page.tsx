import Is_logged_in from '@/security_components/Is_logged_in';
import React from 'react';
import Coaching_registration from './Registration';

const page = () => {
  return (
    <div>
      <Is_logged_in children={<Coaching_registration />} />
    </div>
  );
};

export default page;
