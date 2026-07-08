import type { SVG } from "@/types";

const SharedSupport = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="5" r="2" stroke={fill} strokeWidth="1.5" />
    <circle cx="6" cy="17" r="2" stroke={fill} strokeWidth="1.5" />
    <circle cx="18" cy="17" r="2" stroke={fill} strokeWidth="1.5" />
    <path
      d="M10.8 6.6L7.2 15.4"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13.2 6.6L16.8 15.4"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M8 17H16" stroke={fill} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default SharedSupport;
