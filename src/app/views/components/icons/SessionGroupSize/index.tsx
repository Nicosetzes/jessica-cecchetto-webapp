import type { SVG } from "@/types";

const SessionGroupSize = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="8" r="3" stroke={fill} strokeWidth="1.5" />
      <path
        d="M7.5 18C7.5 15.8 9.5 14 12 14C14.5 14 16.5 15.8 16.5 18"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="5.5" cy="10" r="2" stroke={fill} strokeWidth="1.5" />
      <circle cx="18.5" cy="10" r="2" stroke={fill} strokeWidth="1.5" />
    </svg>
  );
};

export default SessionGroupSize;
