import type { SVG } from "@/types";

const Loneliness = ({ fill, height, size, width, ...props }: SVG) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      width={size || width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="8" stroke={fill} strokeWidth="1.5" />
      <circle cx="12" cy="9" r="2" stroke={fill} strokeWidth="1.5" />
      <path
        d="M8.5 16C9.3 14.6 10.5 14 12 14C13.5 14 14.7 14.6 15.5 16"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Loneliness;
