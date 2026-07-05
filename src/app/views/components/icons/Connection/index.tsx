import type { SVG } from "@/shared/types";

const Connection = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7" cy="8" r="2" stroke={fill} strokeWidth="1.5" />
    <circle cx="17" cy="8" r="2" stroke={fill} strokeWidth="1.5" />

    <path
      d="M9 14C10.5 12.2 13.5 12.2 15 14"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    <path d="M7 10V17" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />

    <path d="M17 10V17" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default Connection;
