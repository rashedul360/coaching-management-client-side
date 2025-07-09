import React, { ReactNode } from 'react';

type Props = {
  title: String;
  count: number | string;
  icon: ReactNode;
  color: 'green' | 'sky' | 'orange' | 'pink';
  text: string;
};
const colorMap: Record<Props['color'], { bg: string }> = {
  green: {
    bg: 'bg-green-100',
  },
  sky: {
    bg: 'bg-sky-100',
  },
  orange: {
    bg: 'bg-orange-100',
  },
  pink: {
    bg: 'bg-pink-100',
  },
};
const Summery_holder = ({ title, count, icon, color, text }: Props) => {
  return (
    <div>
      <div className="bg-white rounded p-4 rounded-2xl">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h2 className="text-md text-gray-500">{title}</h2>
            <h2 className="text-3xl mt-3 text-bold">
              {text}
              {count}
            </h2>
            <h2 className="text-sm text-bold mt-2">New</h2>
          </div>
          <div className={`p-3 ${colorMap[color].bg} rounded-xl`}>{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default Summery_holder;
