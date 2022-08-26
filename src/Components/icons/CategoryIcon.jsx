import * as React from 'react';

function CategoryIcon({ fill = '#3B81F6', ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      {...rest}
      className="css-i6dzq1"
    >
      <path
        d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
        fill={fill}
      ></path>
    </svg>
  );
}

export default CategoryIcon;
