import Is_logged_in from '@/security_components/Is_logged_in';
import React from 'react';
import Portal from './Portal_component';

const page = () => {
  return <Is_logged_in children={<Portal />} />;
};

export default page;
