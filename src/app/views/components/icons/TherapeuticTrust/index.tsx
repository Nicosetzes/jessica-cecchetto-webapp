import type { SVG } from "@/types";

const TherapeuticTrust = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7" cy="9.5" r="3.5" stroke={fill} strokeWidth="1.5" />
    <circle cx="17" cy="9.5" r="3.5" stroke={fill} strokeWidth="1.5" />
    <path
      d="M10.5 9.5H13.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 18C6.8 16.2 8.8 15.2 12 15.2C15.2 15.2 17.2 16.2 19 18"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default TherapeuticTrust;
