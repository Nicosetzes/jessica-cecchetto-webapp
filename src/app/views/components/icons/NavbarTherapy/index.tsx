import type { SVG } from "@/types";

const NavbarTherapy = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 4H18C19.7 4 21 5.3 21 7V12C21 13.7 19.7 15 18 15H13.5L9.5 19V15H6C4.3 15 3 13.7 3 12V7C3 5.3 4.3 4 6 4Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="9.5" r="0.8" fill={fill} />
    <circle cx="12" cy="9.5" r="0.8" fill={fill} />
    <circle cx="15" cy="9.5" r="0.8" fill={fill} />
  </svg>
);

export default NavbarTherapy;
