import type { SVG } from "@/types";

const BehavioralActivation = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 18C10 16 12 13 18 6"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="8" cy="16" r="0.8" fill={fill} />
    <circle cx="11" cy="13" r="0.8" fill={fill} />
    <circle cx="14" cy="10" r="0.8" fill={fill} />
    <circle cx="17" cy="7" r="0.8" fill={fill} />
  </svg>
);

export default BehavioralActivation;
