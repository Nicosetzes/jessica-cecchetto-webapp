import type { SVG } from "@/types";

const SocialAwareness = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 12C4.5 8.5 8 6 12 6C16 6 19.5 8.5 21.5 12C19.5 15.5 16 18 12 18C8 18 4.5 15.5 2.5 12Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.5" stroke={fill} strokeWidth="1.5" />
  </svg>
);

export default SocialAwareness;
