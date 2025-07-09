import React from 'react';
import Summery_holder from './Summery_holder';

import Total_student from './Total_student';
import Total_branches from './Total_branches';
import Total_revenue from './Total_revenue';
const Summary_section = () => {
  return (
    <div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Total_student />
        <Total_branches />
        <Total_revenue />
      </div>
    </div>
  );
};

export default Summary_section;
