import type { SVG } from "@/types";

const MinorityStress = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2.5L19.5 5V11.5C19.5 16.3 16.5 19.8 12 21.5C7.5 19.8 4.5 16.3 4.5 11.5V5L12 2.5Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 7.5V12.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="15.8" r="1" fill={fill} />
  </svg>
);

export default MinorityStress;
