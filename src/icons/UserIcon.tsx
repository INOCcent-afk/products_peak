import React, { FC } from "react";

const UserIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default UserIcon;
