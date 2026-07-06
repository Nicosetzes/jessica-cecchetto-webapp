import type { SVG } from "@/shared/types";

const Communication = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 6H13C14.7 6 16 7.3 16 9V12C16 13.7 14.7 15 13 15H9L6 18V15H5C3.9 15 3 14.1 3 13V8C3 6.9 3.9 6 5 6Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M16 9H19C20.1 9 21 9.9 21 11V15C21 16.1 20.1 17 19 17H18V20L15 17"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export default Communication;
