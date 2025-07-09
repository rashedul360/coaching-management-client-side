import React from 'react';

type Props = {
  amount: number;
  title: string;
  color: 'green' | 'red' | 'sky' | 'purple'; // Define allowed colors
  text: string;
  position: string;
};

const colorMap: Record<Props['color'], { text: string; bg: string }> = {
  green: {
    text: 'text-green-500',
    bg: 'bg-green-100',
  },
  red: {
    text: 'text-red-500',
    bg: 'bg-red-100',
  },
  sky: {
    text: 'text-sky-500',
    bg: 'bg-sky-100',
  },
  purple: {
    text: 'text-purple-500',
    bg: 'bg-purple-100',
  },
};
const Net_income_summary_holder = ({
  color,
  title,
  amount,
  text,
  position,
}: Props) => {
  return (
    <div className={`mb-2 p-5 ${colorMap[color].bg} rounded-md`}>
      <h1 className={`text-sm text-${color}-400 font-bold`}>{title}</h1>
      <h1 className={`text-lg font-bold ${colorMap[color].text}`}>
        {position == 'pre' && '৳'}
        {amount}
        {position == 'post' && '%'}
      </h1>
    </div>
  );
};

export default Net_income_summary_holder;
