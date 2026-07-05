import type { SVG } from "@/shared/types";

const MindsetShift = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 15H16C17.9 15 19.5 13.5 19.5 11.5C19.5 9.6 18 8 16 8C15.7 6.2 14.2 5 12.3 5C10.3 5 8.7 6.4 8.4 8.2C6.4 8.5 5 10 5 11.8C5 13.6 6.4 15 8 15Z"
      stroke={fill}
      strokeWidth="1.5"
    />
    <path d="M10 11H14" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M13 10L14 11L13 12"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MindsetShift;
