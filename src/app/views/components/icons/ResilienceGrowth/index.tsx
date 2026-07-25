import type { SVG } from "@/types";

const ResilienceGrowth = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    width={size || width || 24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 20V6" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M12 10C8.5 10 6.5 8 6.5 4.5C10 4.5 12 6.5 12 10Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 14C15.5 14 17.5 12 17.5 8.5C14 8.5 12 10.5 12 14Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M8 20H16" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default ResilienceGrowth;
