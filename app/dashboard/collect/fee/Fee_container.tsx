import React from 'react';
import DashboardLayout from '../../dash_components/Dash_template/Dash_layout';
import Fee_collect from './Fee_collect';

const Fee_container = () => {
  return (
    <div>
      <DashboardLayout children={<Fee_collect />} />
    </div>
  );
};

export default Fee_container;
