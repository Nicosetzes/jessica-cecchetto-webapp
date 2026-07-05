import type { SVG } from "@/shared/types";

const EmotionalAwareness = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="11" r="6" stroke={fill} strokeWidth="1.5" />
    <path
      d="M10 10H10.01"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 10H14.01"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10 14C10.8 15 11.4 15.5 12 15.5C12.6 15.5 13.2 15 14 14"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default EmotionalAwareness;
