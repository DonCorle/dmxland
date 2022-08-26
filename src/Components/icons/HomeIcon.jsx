import * as React from 'react';

function HomeIcon({ fill = '#ffffff', ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="css-i6dzq1"
      {...rest}
    >
      <path
        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        fill={fill}
      ></path>
      <polyline points="9 22 9 12 15 12 15 22" fill={fill}></polyline>
    </svg>
  );
}

export default HomeIcon;
