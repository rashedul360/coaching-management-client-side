import React from 'react';
import Summary_section from '../summary_section/Summary_section';
import Net_income_summary_container from '../../net_income_summary/Net_income_summary_container';
import Branch_summary_container from '../../branch_summary/Branch_summary_container';

const Dash_container = () => {
  return (
    <div className="text-black">
      <Summary_section />
      <Net_income_summary_container />
      <Branch_summary_container />
    </div>
  );
};

export default Dash_container;
