import type { SVG } from "@/types";

const NavbarSelfAssessment = ({ fill, height, size, width, ...props }: SVG) => (
  <svg
    fill="none"
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 3.5H14.5L18.5 7.5V19C18.5 20.1 17.6 21 16.5 21H6C4.9 21 4 20.1 4 19V5.5C4 4.4 4.9 3.5 6 3.5Z"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 3.5V7.5H18.5"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M8.2 13L10.5 15.3L14.8 11"
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default NavbarSelfAssessment;
