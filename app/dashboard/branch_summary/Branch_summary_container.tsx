import React from 'react';

import Revenue_by_branch from './Revenue_by_branch';
import Student_by_branch from './Student_by_branch';

const Branch_summary_container = () => {
  return (
    <div>
      <div className="grid  gap-3 mt-4 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 ">
        <div className="bg-white p-4 rounded-md">
          <Student_by_branch />
        </div>
        <div className="bg-white p-4 rounded-md">
          <Revenue_by_branch />
        </div>
      </div>
    </div>
  );
};

export default Branch_summary_container;
