import React from 'react';
import Summery_holder from './Summery_holder';

import {
  FaBars,
  FaTimes,
  FaHome,
  FaCodeBranch,
  FaUsers,
  FaGraduationCap,
  FaTasks,
  FaCoins,
  FaLocationArrow,
} from 'react-icons/fa';
const Summary_section = () => {
  return (
    <div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Summery_holder
          title={'Total Students'}
          count={8}
          icon={<FaUsers />}
          color="green"
        />
        <Summery_holder
          title={'Total Students'}
          count={8}
          icon={<FaGraduationCap />}
          color="sky"
        />
        <Summery_holder
          title={'Total Students'}
          count={8}
          icon={<FaTasks />}
          color="orange"
        />
        <Summery_holder
          title={'Total Students'}
          count={8}
          icon={<FaCoins />}
          color="pink"
        />
      </div>
    </div>
  );
};

export default Summary_section;
