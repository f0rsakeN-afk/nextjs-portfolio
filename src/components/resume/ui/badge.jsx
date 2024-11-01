import React from 'react';

export const Badge = ({title}) => {
  return (
    <span
      className="py-1 px-2 bg-[#111827cc] dark:bg-gray-600 text-white rounded-md text-xs font-mono hover:opacity-80"
    >
      {title}
    </span>
  );
};
