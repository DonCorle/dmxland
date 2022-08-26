import * as React from 'react';

function WorkorderIcon({ fill = '#ffffff', ...rest }) {
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
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill={fill}></path>
    </svg>
  );
}

export default WorkorderIcon;
